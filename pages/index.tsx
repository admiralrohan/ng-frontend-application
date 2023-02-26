import axios from 'axios';
import HomePage from '@components/HomePage';
import { IHome } from '@interfaces/Pages.interface';
import Quest from '@interfaces/Quest.interface';
import { useQuery } from '@tanstack/react-query';
import { GetStaticProps } from 'next';

const baseURL = 'http://localhost:3000';

export function fetchQuests(): Promise<Quest[]> {
	return axios(`${baseURL}/api/quests`).then((res) => res.data);
}

function Home({ quests }: IHome) {
	const { isLoading, error, data } = useQuery({
		queryKey: ['quests'],
		queryFn: fetchQuests,
		initialData: quests
	});

	if (isLoading) return 'Loading...';
	if (error) throw new Error('Data fetching error');

	return <HomePage quests={data} />;
}

export const getStaticProps: GetStaticProps = async () => {
	let result = await fetchQuests();

	return {
		props: {
			quests: result
		}
	};
};

export default Home;

import HomePage from '@components/HomePage';
import { IHome } from '@interfaces/Pages.interface';
import { useQuery } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { fetchQuestsFromApi, getAllQuests } from 'src/services/data.service';

function Home({ quests }: IHome) {
	const { isLoading, error, data } = useQuery({
		queryKey: ['quests'],
		queryFn: fetchQuestsFromApi,
		initialData: quests
	});

	if (isLoading) return 'Loading...';
	if (error) throw new Error('Data fetching error');

	return <HomePage quests={data} />;
}

export const getStaticProps: GetStaticProps = async () => {
	let result = await getAllQuests();

	return {
		props: {
			quests: result
		}
	};
};

export default Home;

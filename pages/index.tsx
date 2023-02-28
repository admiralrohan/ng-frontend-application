import HomePage from '@components/HomePage';
import { useQuests } from '@hooks/queries';
import { IHome } from '@interfaces/Pages.interface';
import { getAllQuests } from '@services/data.service';
import { GetStaticProps } from 'next';

function Home({ quests }: IHome) {
	const { isLoading, error, data } = useQuests(quests);

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

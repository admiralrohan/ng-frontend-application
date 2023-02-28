import SingleQuestPage from '@components/SingleQuestPage';
import { useQuery } from '@tanstack/react-query';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ISingleQuest } from '@interfaces/Pages.interface';
import { ParsedUrlQuery } from 'querystring';
import { fetchQuestFromApi, getAllQuests, getQuestById } from 'src/services/data.service';

function SingleQuest({ quest }: ISingleQuest) {
	const { isLoading, error, data } = useQuery({
		queryKey: ['quest', quest.id],
		queryFn: () => fetchQuestFromApi(quest.id.toString()),
		initialData: quest
	});

	if (isLoading) return 'Loading...';
	if (error) throw new Error('Data fetching error');

	return <SingleQuestPage quest={data} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const quests = await getAllQuests();

	const paths = quests.map((quest) => ({
		params: { id: quest.id.toString() }
	}));

	return { paths, fallback: false };
};

interface IParams extends ParsedUrlQuery {
	id: string;
}

export const getStaticProps: GetStaticProps<ISingleQuest, IParams> = async ({ params }) => {
	const { id: questId } = params as IParams;
	let result = await getQuestById(questId);

	return {
		props: {
			quest: result
		}
	};
};

export default SingleQuest;

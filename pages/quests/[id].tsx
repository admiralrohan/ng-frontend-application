import axios from 'axios';
import SingleQuestPage from '@components/SingleQuestPage';
import Quest from '@interfaces/Quest.interface';
import { useQuery } from '@tanstack/react-query';
import { GetStaticPaths, GetStaticProps } from 'next';
import { fetchQuests } from 'pages';
import { ISingleQuest } from '@interfaces/Pages.interface';
import { ParsedUrlQuery } from 'querystring';

const baseURL = 'http://localhost:3000';

function fetchQuest(questId: string): Promise<Quest> {
	return axios(`${baseURL}/api/quests/${questId}`).then((res) => res.data);
}

function SingleQuest({ quest }: ISingleQuest) {
	const { isLoading, error, data } = useQuery({
		queryKey: ['quest', quest.id],
		queryFn: () => fetchQuest(quest.id.toString()),
		initialData: quest
	});

	if (isLoading) return 'Loading...';
	if (error) throw new Error('Data fetching error');

	return <SingleQuestPage quest={data} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const quests = await fetchQuests();

	const paths = quests.map((quest) => ({
		params: { id: quest.id.toString() }
	}));

	return { paths, fallback: true };
};

interface IParams extends ParsedUrlQuery {
	id: string;
}

export const getStaticProps: GetStaticProps<ISingleQuest, IParams> = async ({ params }) => {
	const { id: questId } = params as IParams;
	let result = await fetchQuest(questId);

	return {
		props: {
			quest: result
		}
	};
};

export default SingleQuest;

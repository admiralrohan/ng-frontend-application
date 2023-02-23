import SingleQuestPage from '@components/SingleQuestPage';
import { ISingleQuest } from '@interfaces/Pages.interface';
import axios from 'axios';
import { GetServerSideProps } from 'next';

function SingleQuest({ quest }: ISingleQuest) {
	return <SingleQuestPage quest={quest} />;
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
	let { host } = req.headers;
	const { id: questId } = query;
	let result = await axios(`http://${host}/api/quests/${questId}`);

	return {
		props: {
			quest: result.data
		}
	};
};

export default SingleQuest;

import HomePage from '@components/HomePage';
import { IHome } from '@interfaces/Pages.interface';
import axios from 'axios';
import { GetServerSideProps } from 'next';

function Home({ quests }: IHome) {
	return <HomePage quests={quests} />;
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	let { host } = req.headers;
	let result = await axios(`http://${host}/api/quests`);

	return {
		props: {
			quests: result.data
		}
	};
};

export default Home;

import { NextApiRequest, NextApiResponse } from 'next';
import { getAllQuests } from 'src/services/data.service';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const formattedToQuests = await getAllQuests();

		// Send a response back to the client
		res.status(200).json(formattedToQuests);
	} catch (error) {
		// If the request fails, an error will be thrown
		console.error(error);

		// Send an error response back to the client
		res.status(500).json('An error occurred while fetching the data');
	}
}

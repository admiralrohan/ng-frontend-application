import Quest from '@interfaces/Quest.interface';
import axios from 'axios';

const dev = process.env.NODE_ENV !== 'production';
export const baseURL = dev ? 'http://localhost:3000' : 'https://ng-frontend-application-roan.vercel.app';

export function fetchQuestsFromApi(): Promise<Quest[]> {
	return axios(`${baseURL}/api/quests`).then((res) => res.data);
}

export function fetchQuestFromApi(questId: string): Promise<Quest> {
	return axios(`${baseURL}/api/quests/${questId}`).then((res) => res.data);
}

export async function getAllQuests(): Promise<Quest[]> {
	// Save the data to the collection
	const getRes = await fetch(`https://dummyjson.com/products?offset=0&limit=10`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then((response) => response.json())
		.then((data) => data.products);

	if (getRes.code) {
		throw new Error('An error occurred while fetching the data');
	}

	const formattedToQuests = getRes.map((quest: any) => {
		return {
			id: quest.id,
			skillTree: quest.category.replace('-', ' '), // 'home-decoration' => 'home decoration'
			skill: quest.brand,
			title: quest.title,
			difficulty: Math.floor(quest.rating),
			experience: quest.stock * 100,
			gold: quest.price,
			type: '-',
			cover: quest.thumbnail
		};
	});

	return formattedToQuests;
}

export async function getQuestById(questId: string) {
	// Fetch a product by id
	const questRes = await fetch(`https://dummyjson.com/products/${questId}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((response) => response.json());

	if (questRes.code) {
		throw new Error('An error occurred while fetching the data');
	}

	const formattedToQuests = {
		id: questRes.id,
		skillTree: questRes.category.replace('-', ' '), // 'home-decoration' => 'home decoration'
		skill: questRes.brand,
		title: questRes.title,
		difficulty: Math.floor(questRes.rating),
		experience: questRes.stock * 100,
		gold: questRes.price,
		type: '-',
		cover: questRes.thumbnail,
		description: questRes.description,
		rewards: {
			experience: questRes.stock * 100,
			gold: questRes.price
		}
	};

	return formattedToQuests;
}

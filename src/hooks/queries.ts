import { useQuery } from '@tanstack/react-query';
import Quest from '@interfaces/Quest.interface';
import { fetchQuestFromApi, fetchQuestsFromApi } from '@services/data.service';

export function useQuests(initialQuests: Quest[]) {
	return useQuery({
		queryKey: ['quests'],
		queryFn: fetchQuestsFromApi,
		initialData: initialQuests
	});
}

export function useQuest(initialQuestDetails: Quest) {
	return useQuery({
		queryKey: ['quest', initialQuestDetails.id.toString()],
		queryFn: () => fetchQuestFromApi(initialQuestDetails.id.toString()),
		initialData: initialQuestDetails
	});
}

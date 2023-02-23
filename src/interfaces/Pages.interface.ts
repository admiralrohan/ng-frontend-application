import Quest from '@interfaces/Quest.interface';

// Interfaces of all pages, will break down by modules when app will grow up
// We need these contracts at 2 places, the page file and the component file. Keeping here so it can act as single source of truth.

export interface IHome {
	quests: Quest[];
}

export interface ISingleQuest {
	quest: Quest;
}

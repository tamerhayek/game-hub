import { GameQuery } from "../App";
import useData from "./useData";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const useGames = (gameQuery: GameQuery) => {
	return useData<Game>(
		"/games",
		{
			params: {
				genres: gameQuery.genre?.id,
				parent_platforms: gameQuery.platform?.id,
				ordering: gameQuery.sortOrder,
				search: gameQuery.searchText,
			},
		},
		[
			gameQuery.genre?.id,
			gameQuery.platform?.id,
			gameQuery.sortOrder,
			gameQuery.searchText,
		]
	);
};

export default useGames;


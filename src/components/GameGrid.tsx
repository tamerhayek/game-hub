import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "../services/apiClient";

interface Game {
	id: number;
	name: string;
}

interface FetchGamesResponse {
	count: number;
	results: Game[];
}

const GameGrid = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		apiClient
			.get<FetchGamesResponse>("/games")
			.then((response) => {
				setGames(response.data.results);
			})
			.catch((error) => {
				setError(error.message);
			});
	}, []);

	if (error) {
		return <Text>{error}</Text>;
	}

	return (
		<ul>
			{games.map((game) => (
				<li key={game.id}>{game.name}</li>
			))}
		</ul>
	);
};

export default GameGrid;

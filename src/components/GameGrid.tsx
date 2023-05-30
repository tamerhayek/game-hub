import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
	const { games, isLoading, error } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	if (error) {
		return <Text>{error}</Text>;
	}

	return (
		<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
			{isLoading &&
				skeletons.map((skeleton) => (
					<GameCardSkeleton key={skeleton} />
				))}
			{!isLoading &&
				games.map((game) => (
					<GameCard key={game.id} game={game}></GameCard>
				))}
		</SimpleGrid>
	);
};

export default GameGrid;


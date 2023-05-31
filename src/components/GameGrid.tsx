import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
	selectedGenre: Genre | null;
	selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
	const { data, isLoading, error } = useGames(
		selectedGenre,
		selectedPlatform
	);
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	if (error) {
		return <Text>{error}</Text>;
	}

	return (
		<SimpleGrid
			columns={{ sm: 1, md: 2, lg: 3 }}
			spacing={3}
			paddingX={3}
			marginY={5}
		>
			{isLoading &&
				skeletons.map((skeleton) => (
					<GameCardContainer key={skeleton}>
						<GameCardSkeleton />
					</GameCardContainer>
				))}
			{!isLoading &&
				data.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game}></GameCard>
					</GameCardContainer>
				))}
		</SimpleGrid>
	);
};

export default GameGrid;


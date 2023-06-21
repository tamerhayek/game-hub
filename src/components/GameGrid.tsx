import { Box, Button, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const {
		data,
		isLoading,
		error,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	if (error) {
		return <Text>{error.message}</Text>;
	}

	return (
		<Box paddingX={3}>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3}>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{!isLoading &&
					data?.pages.map((page, index) => (
						<React.Fragment key={index}>
							{page.results.map((game) => (
								<GameCardContainer key={game.id}>
									<GameCard game={game}></GameCard>
								</GameCardContainer>
							))}
						</React.Fragment>
					))}
			</SimpleGrid>
			{hasNextPage && (
				<Button marginTop={10} onClick={() => fetchNextPage()}>
					{isFetchingNextPage ? "Loading..." : "Load More"}
				</Button>
			)}
		</Box>
	);
};

export default GameGrid;


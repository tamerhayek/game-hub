import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
	const {
		data,
		isLoading,
		error,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
		refetch,
	} = useGames();

	if (error) {
		return <Text>{error.message}</Text>;
	}

	const fetchedGamesCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) ||
		0;

	return (
		<InfiniteScroll
			dataLength={fetchedGamesCount}
			hasMore={!!hasNextPage}
			next={() => fetchNextPage()}
			loader={<Spinner />}
		>
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				spacing={3}
				paddingX={3}
				alignItems={"stretch"}
			>
				{data?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.results.map((game) => (
							<GameCardContainer key={game.id}>
								<GameCard game={game}></GameCard>
							</GameCardContainer>
						))}
					</React.Fragment>
				))}
			</SimpleGrid>
		</InfiniteScroll>
	);
};

export default GameGrid;


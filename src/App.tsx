import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	const handleSelectGenre = (genre: Genre) => {
		setGameQuery({ ...gameQuery, genre });
	};

	const handleSelectPlatform = (platform: Platform) => {
		setGameQuery({ ...gameQuery, platform });
	};

	const handleSelectSortOrder = (sortOrder: string) => {
		setGameQuery({ ...gameQuery, sortOrder });
	};

	const handleSearch = (searchText: string) => {
		setGameQuery({ ...gameQuery, searchText });
	};

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main" "footer"`,
				lg: `"nav nav" "aside main" "footer footer"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}
			gap={6}
		>
			<GridItem area="nav">
				<Navbar handleSearch={handleSearch} />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<Aside
						handleSelectGenre={handleSelectGenre}
						selectedGenre={gameQuery.genre}
					/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<Box paddingLeft={3} marginBottom={3}>
					<GameHeading gameQuery={gameQuery} />
					<Flex gap={3} paddingY={3}>
						<PlatformSelector
							handleSelectPlatform={handleSelectPlatform}
							selectedPlatform={gameQuery.platform}
						/>
						<SortSelector
							selectedSortOrder={gameQuery.sortOrder}
							handleSelectSortOrder={handleSelectSortOrder}
						/>
					</Flex>
				</Box>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
			<GridItem area="footer">
				<Footer />
			</GridItem>
		</Grid>
	);
}

export default App;


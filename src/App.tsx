import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import Aside from "./components/Aside";
import PlatformSelector from "./components/PlatformSelector";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
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

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}
			gap={6}
		>
			<GridItem area="nav">
				<Navbar />
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
				<HStack spacing={5} padding={3} marginBottom={3}>
					<PlatformSelector
						handleSelectPlatform={handleSelectPlatform}
						selectedPlatform={gameQuery.platform}
					/>
					<SortSelector
						selectedSortOrder={gameQuery.sortOrder}
						handleSelectSortOrder={handleSelectSortOrder}
					/>
				</HStack>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;


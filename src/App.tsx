import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import Aside from "./components/Aside";
import PlatformSelector from "./components/PlatformSelector";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
		null
	);

	const handleSelectGenre = (genre: Genre) => {
		setSelectedGenre(genre);
	};

	const handleSelectPlatform = (platform: Platform) => {
		setSelectedPlatform(platform);
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
						selectedGenre={selectedGenre}
					/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<PlatformSelector
					handleSelectPlatform={handleSelectPlatform}
					selectedPlatform={selectedPlatform}
				/>
				<GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
			</GridItem>
		</Grid>
	);
}

export default App;


import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Footer from "./components/Footer";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
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
				<Navbar />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area="main">
				<Box paddingLeft={3} marginBottom={3}>
					<GameHeading />
					<Flex gap={3} paddingY={3}>
						<PlatformSelector />
						<SortSelector />
					</Flex>
				</Box>
				<GameGrid />
			</GridItem>
			<GridItem area="footer">
				<Footer />
			</GridItem>
		</Grid>
	);
}

export default App;


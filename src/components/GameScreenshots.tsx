import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
	gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
	const { data: screenshots, isLoading, error } = useScreenshots(gameId);

	if (error) throw error;

	if (isLoading) return <Spinner />;

	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} marginTop={10}>
			{screenshots?.results.map((screenshot) => (
				<Image key={screenshot.id} src={screenshot.image} />
			))}
		</SimpleGrid>
	);
};

export default GameScreenshots;


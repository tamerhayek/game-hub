import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading) return <Spinner />;

	if (error || !game) throw error;

	return (
		<Box padding={5}>
			<Heading marginBottom={3}>{game.name}</Heading>
			<ExpandableText>{game.description}</ExpandableText>
			<GameAttributes game={game} />
			<GameTrailer gameId={game.id} />
			<GameScreenshots gameId={game.id} />
		</Box>
	);
};

export default GameDetailPage;


import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
	gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
	const { data: trailers, isLoading, error } = useTrailers(gameId);

	if (isLoading) return <Spinner />;

	if (error) throw error;

	const first = trailers?.results[0];

	return first ? (
		<video src={first.data[480]} poster={first.preview} controls></video>
	) : null;
};

export default GameTrailer;


import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
	const { genres, isLoading, error } = useGenres();

	if (error) {
		return <Text>{error}</Text>;
	}

	return (
		<ul>
			{genres.map((genre) => (
				<li key={genre.id}>{genre.name}</li>
			))}
		</ul>
	);
};

export default GenreList;


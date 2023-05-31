import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

const GenreList = () => {
	const { data, isLoading, error } = useGenres();

	if (error) {
		return <Text>{error}</Text>;
	}

	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY={"5px"} >
					<HStack>
						<Image
							src={getCroppedImageUrl(genre.image_background)}
							alt={genre.name}
							boxSize={"32px"}
							borderRadius={8}
						/>
						<Text fontSize={"lg"}>{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;


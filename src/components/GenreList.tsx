import {
	HStack,
	Image,
	List,
	ListItem,
	Skeleton,
	SkeletonText,
	Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

const GenreList = () => {
	const { data, isLoading, error } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	if (error) return null;

	if (isLoading) {
		return (
			<List>
				{skeletons.map((skeleton) => (
					<ListItem key={skeleton} paddingY={"5px"}>
						<Skeleton height={"32px"} />
					</ListItem>
				))}
			</List>
		);
	}

	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY={"5px"}>
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


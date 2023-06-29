import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Skeleton,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
import useGameQueryStore from "../store";

const GenreList = () => {
	const { data, isLoading, error } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	if (error) return null;

	const selectedGenreId = useGameQueryStore(
		(store) => store.gameQuery.genreId
	);
	const setGenreId = useGameQueryStore((store) => store.setGenreId);

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
		<>
			<Heading marginBottom={3} fontSize={"2xl"}>
				Genres
			</Heading>
			<List>
				{data?.results.map((genre) => (
					<ListItem key={genre.id} paddingY={"5px"}>
						<HStack spacing={3}>
							<Image
								src={getCroppedImageUrl(genre.image_background)}
								alt={genre.name}
								boxSize={"32px"}
								borderRadius={8}
								objectFit={"cover"}
							/>
							<Button
								whiteSpace="normal"
								textAlign="left"
								fontSize={"lg"}
								fontWeight={
									selectedGenreId === genre.id
										? "bold"
										: "normal"
								}
								variant={"link"}
								onClick={() => setGenreId(genre.id)}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;


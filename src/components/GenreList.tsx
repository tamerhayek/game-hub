import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Skeleton,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
	handleSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ handleSelectGenre, selectedGenre }: Props) => {
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
								selectedGenre?.id === genre.id
									? "bold"
									: "normal"
							}
							variant={"link"}
							onClick={() => handleSelectGenre(genre)}
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;


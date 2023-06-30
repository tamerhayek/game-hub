import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenre from "../hooks/useGenre";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GenreSelector = () => {
	const { data, error } = useGenres();

	if (error) return null;

	const selectedGenreId = useGameQueryStore(
		(store) => store.gameQuery.genreId
	);
	const setGenreId = useGameQueryStore((store) => store.setGenreId);
	const selectedGenre = useGenre(selectedGenreId);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedGenre?.name || "Genres"}
			</MenuButton>
			<MenuList>
				{data?.results.map((genre) => (
					<MenuItem
						key={genre.id}
						onClick={() => setGenreId(genre.id)}
					>
						{genre.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default GenreSelector;


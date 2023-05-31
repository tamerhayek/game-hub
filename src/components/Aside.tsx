import { Genre } from "../hooks/useGenres";
import GenreList from "./GenreList";

interface Props {
	handleSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const Aside = ({ handleSelectGenre, selectedGenre }: Props) => {
	return (
		<>
			<GenreList
				handleSelectGenre={handleSelectGenre}
				selectedGenre={selectedGenre}
			/>
		</>
	);
};

export default Aside;


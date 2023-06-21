import { Genre } from "../hooks/useGenres";
import GenreList from "./GenreList";

interface Props {
	handleSelectGenre: (genre: Genre) => void;
	selectedGenreId?: number;
}

const Aside = ({ handleSelectGenre, selectedGenreId }: Props) => {
	return (
		<>
			<GenreList
				handleSelectGenre={handleSelectGenre}
				selectedGenreId={selectedGenreId}
			/>
		</>
	);
};

export default Aside;


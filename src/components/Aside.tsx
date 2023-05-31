import { Genre } from "../hooks/useGenres";
import GenreList from "./GenreList";

interface Props {
	handleSelectGenre: (genre: Genre) => void;
}

const Aside = ({ handleSelectGenre }: Props) => {
	return <GenreList handleSelectGenre={handleSelectGenre} />;
};

export default Aside;


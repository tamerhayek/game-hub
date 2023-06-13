import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () => {
	// Fetch data from API
	// return useData<Genre>("/genres");

	// Fetch data from local storage
	return { data: genres, isLoading: false, error: null };
};

export default useGenres;


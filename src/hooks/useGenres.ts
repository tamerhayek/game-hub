import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient, { FetchResponse } from "../services/apiClient";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () => {
	return useQuery<FetchResponse<Genre>, Error>({
		queryKey: ["genres"],
		queryFn: () =>
			apiClient
				.get<FetchResponse<Genre>>("/genres")
				.then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
		initialData: genres,
	});
};

export default useGenres;


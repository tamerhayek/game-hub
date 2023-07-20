import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/apiClient";
import Genre from "../models/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
	return useQuery({
		queryKey: ["genres"],
		queryFn: apiClient.getAll,
		staleTime: ms("24h"), // 24 hours
		initialData: genres,
	});
};

export default useGenres;


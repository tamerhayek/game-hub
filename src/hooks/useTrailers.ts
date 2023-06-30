import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Trailer } from "../models/Trailer";
import APIClient from "../services/apiClient";

const useTrailers = (gameId: number) => {
	const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

	return useQuery({
		queryKey: ["trailers", gameId],
		queryFn: apiClient.getAll,
		staleTime: ms("24h"), // 24 hours
	});
};

export default useTrailers;


import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/apiClient";
import Game from "../models/Game";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
	useQuery({
		queryKey: ["games", slug],
		queryFn: () => apiClient.get(slug),
		staleTime: ms("24h"), // 24 hours
	});

export default useGame;


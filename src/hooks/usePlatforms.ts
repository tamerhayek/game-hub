import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/apiClient";
import ms from "ms";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
	return useQuery({
		queryKey: ["platforms"],
		queryFn: apiClient.getAll,
		staleTime: ms("24h"), // 24 hours
		initialData: platforms,
	});
};

export default usePlatforms;


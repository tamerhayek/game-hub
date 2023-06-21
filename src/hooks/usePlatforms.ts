import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/apiClient";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const apiClient = new APIClient("/platforms/lists/parents");

const usePlatforms = () => {
	return useQuery({
		queryKey: ["platforms"],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000, // 24 hours
		initialData: platforms,
	});
};

export default usePlatforms;


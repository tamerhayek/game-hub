import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

interface Genre {
	id: number;
	name: string;
}

interface FetchGenreResponse {
	count: number;
	results: Genre[];
}

const useGenres = () => {
	const [genres, setGenres] = useState<Genre[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const controller = new AbortController();

		setIsLoading(true);
		apiClient
			.get<FetchGenreResponse>("/genres", { signal: controller.signal })
			.then((response) => {
				setGenres(response.data.results);
				setIsLoading(false);
			})
			.catch((error) => {
				if (error instanceof CanceledError) return;
				setError(error.message);
				setIsLoading(false);
			});

		return () => controller.abort();
	});

	return { genres, isLoading, error };
};

export default useGenres;


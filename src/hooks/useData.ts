import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

interface FetchResponse<T> {
	count: number;
	results: T[];
}

const useData = <T>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	deps: any[] = []
) => {
	const [data, setData] = useState<T[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const controller = new AbortController();

		setIsLoading(true);
		apiClient
			.get<FetchResponse<T>>(endpoint, {
				...requestConfig,
				signal: controller.signal,
			})
			.then((response) => {
				setData(response.data.results);
				setIsLoading(false);
			})
			.catch((error) => {
				if (error instanceof CanceledError) return;
				setError(error.message);
				setIsLoading(false);
			});

		return () => controller.abort();
	}, [...deps]);

	return { data, isLoading, error };
};

export default useData;


import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
	count: number;
	next: string | null;
	results: T[];
}

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_RAWG_API_URL,
	params: {
		key: import.meta.env.VITE_RAWG_API_KEY,
	},
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config: AxiosRequestConfig) =>
		axiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((res) => res.data);
}

export default APIClient;


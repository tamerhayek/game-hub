import axios from "axios";

export default axios.create({
	baseURL: import.meta.env.VITE_RAWG_API_URL,
	params: {
		key: import.meta.env.VITE_RAWG_API_KEY,
	},
});

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

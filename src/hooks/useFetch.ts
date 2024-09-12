import { useEffect, useState } from "react";

type FetchType<T> = {
	data: T | null;
	loading: boolean;
	error: string | null;
};

export const useFetch = <T>(api_url: string) => {
	const [apiData, setApiData] = useState<FetchType<T>>({ data: null, loading: true, error: null });

	useEffect(() => {
		const fetchData = async (api_url: string) => {
			try {
				setApiData({
					data: null,
					loading: true,
					error: null,
				});

				const response = await fetch(api_url);

				if (!response.ok) {
					console.log("Failed!");
				}

				const data = await response.json();

				setApiData({ data: data.data, loading: false, error: null });
			} catch (error) {
				setApiData({ data: null, loading: false, error: error as string });
			}
		};

		setTimeout(() => {
			fetchData(api_url);
		}, 3000);
	}, []);

	return apiData;
};

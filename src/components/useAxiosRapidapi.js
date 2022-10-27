import { useState, useEffect } from "react";
import axios from "axios";

function useAxiosRapidapiSearch({ url, method, headers = null }) {
	const [data, setData] = useState();
	const [error, setError] = useState(false);
	const [isloading, setloading] = useState(true);

	useEffect(() => {
		const options = {
			method: method,
			url: url,
			headers: JSON.parse(headers),
		};
		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				setData(response.data.response);
				setloading(false);
				setError(false);
			})
			.catch(function (error) {
				setError(error);
				setloading(false);
			});
	}, [method, url, headers]);

	return {
		data,
		error,
		setError,
		isloading,
	};
}

export default useAxiosRapidapiSearch;

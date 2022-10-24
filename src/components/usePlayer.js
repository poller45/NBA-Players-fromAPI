import { useEffect, useState } from "react";

function usePlayer() {
	const [inputPlayer, setPlayer] = useState("Wade");
	const [data, setData] = useState();
	const [error, setError] = useState(false);
	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "102c34f16emsh49301a8699168b1p1bfa04jsn772008b2300e",
				"X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
			},
		};

		fetch(
			`https://api-nba-v1.p.rapidapi.com/players?search=${inputPlayer}`,
			options
		)
			.then((el) => el.json())
			.then((data) => {
				console.log("!!!!!!!!!", data);
				if (data.errors.length === 0) {
					setData(data.response);
					setError(false);
				} else {
					console.log("Error", data.errors.search);
					setError(data.errors.search);
				}
			});
	}, [inputPlayer]);

	return {
		setPlayer,
		inputPlayer,
		data,
		error,
	};
}

export default usePlayer;

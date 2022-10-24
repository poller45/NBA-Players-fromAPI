import { useState } from "react";
import Player from "../components/RenderPlyers";
//import usePlayer from "./usePlayer";

function List() {
	const [inputPlayer, setPlayer] = useState("");
	const [data, setData] = useState();
	const [error, setError] = useState(false);

	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "102c34f16emsh49301a8699168b1p1bfa04jsn772008b2300e",
			"X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
		},
	};

	const updatePlayer = () => {
		fetch(
			`https://api-nba-v1.p.rapidapi.com/players?search=${inputPlayer}`,
			options
		)
			.then((el) => el.json())
			.then((data) => {
				if (data.errors.length === 0) {
					setData(data.response);
					setError(false);
				} else {
					console.log("Error", data.errors.search);
					setError(data.errors.search);
				}
			});
	};

	return (
		<>
			<div className="App">
				<div>
					<input
						type="text"
						placeholder="input player surname"
						value={inputPlayer}
						onChange={({ target: { value } }) => setPlayer(value)}
					/>
					<button type="button" onClick={updatePlayer}>
						Serch player
					</button>
				</div>
				<div>
					{error && <div> {error} </div>}
					<table className="players" border="0">
						<caption>NBA player </caption>
						<thead>
							<tr>
								<th>N</th>
								<th>Name</th>
								<th>Birth</th>
								<th>College</th>
								<th>Career</th>
								<th>BIO</th>
							</tr>
						</thead>
						<tbody>
							{!error &&
								data &&
								data.map((item, i) => {
									return (
										<Player
											index={i + 1}
											firstname={item.firstname}
											lastname={item.lastname}
											birth={item.birth.date}
											country={item.birth.country}
											college={item.college}
											career={item.nba.start}
											height={item.height.meters}
											weight={item.weight.kilograms}
										/>
									);
								})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
export default List;

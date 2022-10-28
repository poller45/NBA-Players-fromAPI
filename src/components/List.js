import { useState } from "react";
import Player from "../components/RenderPlyers";
import useAxiosRapidapiSearch from "pavelchereacthook";

function List() {
	const [inputPlayer, setPlayer] = useState("");

	const { data, error, isloading } = useAxiosRapidapiSearch({
		method: "GET",
		url: "https://api-nba-v1.p.rapidapi.com/players?search=" + inputPlayer,
		headers: JSON.stringify({
			"X-RapidAPI-Key": "102c34f16emsh49301a8699168b1p1bfa04jsn772008b2300e",
			"X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
		}),
	});

	return (
		<>
			<div className="app">
				<div>
					<input
						type="text"
						placeholder="input player surname"
						value={inputPlayer}
						onChange={({ target: { value } }) => setPlayer(value)}
					/>
					<button>search</button>
				</div>
				<div>
					{/* {error && <div style={{ textAlign: "center" }}> {error} </div>} */}
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
							{isloading && (
								<div style={{ textAlign: "center" }}>
									{" "}
									Start typing player name{" "}
								</div>
							)}
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

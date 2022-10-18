import { useState } from "react";
import Player from "../components/RenderPlyers";

function List() {
	const [inputPlayer, setPlayer] = useState("smart");
	const [data, setData] = useState();

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
				setData(data.response);
			})
			.catch((err) => console.error(err));
	};

	return (
		<>
			<div>
				<input
					type="text"
					value={inputPlayer}
					onChange={(event) => setPlayer(event.target.value)}
				/>
				<button type="button" onClick={updatePlayer}>
					Serch player
				</button>
			</div>
			<div>
				<table className="players" border="0">
					<caption>NBA player</caption>
					<th>N</th>
					<th>Name</th>
					<th>Birth</th>
					<th>College</th>
					<th>Career</th>
					<th>BIO</th>
					{data &&
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
				</table>
			</div>
		</>
	);
}
export default List;

import "./Player.css";

function Player({
	index,
	firstname,
	lastname,
	birth,
	country,
	college,
	career,
	height,
	weight,
}) {
	return (
		<tr key={firstname}>
			<td>{index}</td>
			<td>
				{firstname} {lastname}
			</td>
			<td>
				{birth}
				<br />
				{country}
			</td>
			<td> {college}</td>
			<td>Pro NBA carrer start at {career}</td>
			<td>
				Height: {height}
				<br />
				Weight: {weight}
			</td>
		</tr>
	);
}

export default Player;

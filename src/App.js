import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import List from "./components/List";
const router = createBrowserRouter([
	{
		path: "/",
		element: <List />,
	},
	{
		path: "/info",
		element: <About />,
	},
]);

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<ul>
					<li>NBA player</li>
					<li>
						<a href={`info`}>info</a>
					</li>
					<li>
						<a href={`/`}>Main</a>
					</li>
				</ul>
			</header>
			<RouterProvider router={router} />
		</div>
	);
}
export default App;

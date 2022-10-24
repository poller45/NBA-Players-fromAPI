import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import List from "./components/List";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Link to="/" className="link-main">
					Main
				</Link>
				<Link to="/about" className="link">
					About
				</Link>
				<Routes>
					<Route path="/" element={<List />}></Route>
					<Route path="/about" element={<About />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

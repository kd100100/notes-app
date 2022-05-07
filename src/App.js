import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { useState } from "react";

function App() {
	const [user, setUser] = useState(null);

	return (
		<div className="min-h-screen bg-slate-100 select-none">
			{user ? (
				<>
					<Header user={user} setUser={setUser} />
					<Main user={user} />
					<Footer />
				</>
			) : (
				<Login setUser={setUser} />
			)}
		</div>
	);
}

export default App;

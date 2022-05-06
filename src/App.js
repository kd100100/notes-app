import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="min-h-screen bg-slate-100 select-none">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;

import React, { useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "../assets/Loader.css";
import Logo from "../assets/logo.png";

const Login = ({ setUser }) => {
	useEffect(() => {
		const provider = new GoogleAuthProvider();
		const auth = getAuth();
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				setUser(user);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div className="w-screen h-screen bg-white">
			<div className="flex flex-col items-center justify-center h-screen">
				<img src={Logo} alt="Logo" className="mb-10 w-96" />
				<div class="lds-hourglass"></div>
			</div>
		</div>
	);
};

export default Login;

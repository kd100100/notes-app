import React, { useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "../assets/Loader.css";
import Logo from "../assets/logo.png";

const Login = ({ setUser }) => {
	const [loggingIn, setLoggingIn] = React.useState(false);

	const loginUsingGoogle = () => {
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
	};
	return (
		<div className="w-screen h-screen bg-white">
			<div className="flex flex-col items-center justify-center h-screen">
				<img src={Logo} alt="Logo" className="mb-10 w-96" />
				<div className="h-40">
					{loggingIn ? (
						<div class="lds-hourglass"></div>
					) : (
						<button
							onClick={() => {
								setLoggingIn(true);
								loginUsingGoogle();
							}}
							className="bg-violet-500 text-white py-2 px-4 rounded-lg text-xl"
						>
							Login with Google
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Login;

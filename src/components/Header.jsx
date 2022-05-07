import React from "react";
import Logo from "../assets/logo.png";
import DummyProfilePic from "../assets/dummy-profile-pic.png";

const Header = () => {
	return (
		<header className="bg-white shadow-lg">
			<div className="container mx-auto flex items-center h-20 justify-between">
				<img src={Logo} alt="Logo" className="w-48" />
				<div className="flex items-center mr-6">
					<img
						src={DummyProfilePic}
						alt="Profile"
						className="w-12 rounded-full"
					/>
					<span
						className="ml-2 text-gray-700 font-semibold hidden sm:inline-flex"
						tabIndex={0}
					>
						Hello, Keerthivasan D!
					</span>
				</div>
			</div>
		</header>
	);
};

export default Header;

import React from "react";
import ActionBar from "./ActionBar";
import PlusIcon from "../../assets/plus-icon.png";
import Note from "./Note";

const Main = () => {
	return (
		<main className="relative min-h-[calc(100vh-10rem)] container mx-auto">
			<ActionBar />
			<button className="fixed bottom-14 right-5 p-2 bg-white rounded-full shadow-md w-12 sm:hidden">
				<img src={PlusIcon} alt="Plus" />
			</button>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
				<Note
					title={"Personal Note 1"}
					text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
					editedDate={new Date().toLocaleDateString()}
				/>
				<Note
					title={"Personal Note 1"}
					text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
					editedDate={new Date().toLocaleDateString()}
				/>
				<Note
					title={"Personal Note 1"}
					text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
					editedDate={new Date().toLocaleDateString()}
				/>
				<Note
					title={"Personal Note 1"}
					text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
					editedDate={new Date().toLocaleDateString()}
				/>
				<Note
					title={"Personal Note 1"}
					text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
					editedDate={new Date().toLocaleDateString()}
				/>
				<Note
					title={"Personal Note 1"}
					text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
					editedDate={new Date().toLocaleDateString()}
				/>
				<Note
					title={"Personal Note 1"}
					text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
					editedDate={new Date().toLocaleDateString()}
				/>
				<Note
					title={"Personal Note 1"}
					text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
					editedDate={new Date().toLocaleDateString()}
				/>
				<Note
					title={"Personal Note 1"}
					text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
					editedDate={new Date().toLocaleDateString()}
				/>
			</div>
		</main>
	);
};

export default Main;

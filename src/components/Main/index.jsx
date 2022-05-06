import React, { useEffect, useState } from "react";
import ActionBar from "./ActionBar";
import PlusIcon from "../../assets/plus-icon.png";
import Note from "./Note";
import AddNote from "./AddNote";
import { getDocuments } from "../../firebase/APIs";

const Main = () => {
	const [isAdding, setIsAdding] = useState(true);
	const [notes, setNotes] = useState([]);
	const [filter, setFilter] = useState("all");

	useEffect(() => {
		getDocuments("notes", setNotes);
	}, []);

	const filteredNotes = notes.filter((note) => {
		if (filter === "all") return true;
		else return filter === note.type;
	});

	return (
		<main className="relative min-h-[calc(100vh-10rem)] container mx-auto">
			{isAdding && <AddNote setIsAdding={setIsAdding} />}
			<ActionBar
				setIsAdding={setIsAdding}
				filter={filter}
				setFilter={setFilter}
			/>
			<button className="fixed bottom-14 right-5 p-2 bg-white rounded-full shadow-md w-12 sm:hidden z-10">
				<img src={PlusIcon} alt="Plus" />
			</button>

			<ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-3">
				{filteredNotes.map((note, index) => (
					<Note key={index} {...note} />
				))}
				{/* <Note
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
				/> */}
			</ol>
		</main>
	);
};

export default Main;

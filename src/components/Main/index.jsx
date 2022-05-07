import React, { useEffect, useState } from "react";
import ActionBar from "./ActionBar";
import PlusIcon from "../../assets/plus-icon.png";
import Note from "./Note";
import AddEditNote from "./AddEditNote";
import { addDocument, deleteDocument, getDocuments } from "../../firebase/APIs";
import ViewNote from "./ViewNote";

const Main = ({ user }) => {
	const [isAdding, setIsAdding] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [isViewing, setIsViewing] = useState(false);
	const [currentNote, setCurrentNote] = useState(null);
	const [notes, setNotes] = useState([]);
	const [filter, setFilter] = useState("all");

	useEffect(() => {
		getDocuments("notes", setNotes);
	}, []);

	const filteredNotes = notes.filter((note) => {
		if (filter === "all") return true;
		else return filter === note.type;
	});

	const addNewNote = async (data) => {
		await addDocument("notes", data)
			.then(() => {
				return Promise.resolve();
			})
			.catch((error) => {
				throw new Error(error);
			});
	};

	const editNote = async (data) => {
		await deleteDocument("notes", currentNote.id)
			.then(() => {
				return addNewNote(data);
			})
			.catch((error) => {
				throw new Error(error);
			});
	};

	const deleteNote = async () => {
		await deleteDocument("notes", currentNote.id)
			.then(() => {
				setCurrentNote(null);
				setIsViewing(false);
			})
			.catch((error) => {
				throw new Error(error);
			});
	};

	return (
		<main className="relative min-h-[calc(100vh-10rem)] container mx-auto">
			{isViewing && (
				<ViewNote
					{...currentNote}
					editedDate={currentNote.editedDate.toDate()}
					editNote={() => {
						setIsEditing(true);
						setIsViewing(false);
					}}
					deleteNote={deleteNote}
					closePopup={() => setIsViewing(false)}
				/>
			)}
			{isAdding && (
				<AddEditNote
					closePopup={() => setIsAdding(false)}
					submitFunction={addNewNote}
					user={user}
				/>
			)}
			{isEditing && (
				<AddEditNote
					closePopup={() => setIsEditing(false)}
					submitFunction={editNote}
					noteData={currentNote}
					user={user}
				/>
			)}
			<ActionBar
				setIsAdding={setIsAdding}
				filter={filter}
				setFilter={setFilter}
			/>
			<button
				className="fixed bottom-14 right-5 p-2 bg-white rounded-full shadow-md w-12 sm:hidden z-10"
				onClick={() => setIsAdding(true)}
			>
				<img src={PlusIcon} alt="Plus" />
			</button>

			<ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-3">
				{filteredNotes.map((note, index) => (
					<Note
						key={index}
						{...note}
						editedDate={note.editedDate.toDate()}
						setCurrentNote={() => {
							setCurrentNote(note);
							setIsViewing(true);
						}}
					/>
				))}
			</ol>
		</main>
	);
};

export default Main;

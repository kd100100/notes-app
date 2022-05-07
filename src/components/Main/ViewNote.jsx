import React, { useEffect, useRef } from "react";

const ViewNote = ({
	title,
	text,
	type,
	editedDate,
	editNote,
	closePopup,
	deleteNote,
	editedBy,
}) => {
	const titleRef = useRef();
	const editedDateFormatted = new Date(editedDate).toLocaleDateString();

	const handleKeyPress = (e) => {
		if (e.key === "Escape") {
			closePopup();
		}
	};

	useEffect(() => {
		titleRef.current.focus();
	}, []);

	return (
		<div
			className="fixed bottom-0 left-0 w-full h-full bg-slate-900/30 z-20"
			onKeyDown={handleKeyPress}
		>
			<div className="bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg min-w-[20rem] md:min-w-[30rem] lg:min-w-[40rem]">
				<div className="flex justify-between">
					<h1 className="text-3xl font-semibold text-violet-500 flex items-center">
						<div
							className="truncate max-w-[10rem] md:max-w-[15rem] lg:max-w-[25rem] xl:max-w-[30rem]"
							title={title}
							id="tttttt"
							ref={titleRef}
							tabIndex="0"
						>
							{title}
						</div>
						<div className="px-3 py-1 rounded-lg border text-base text-violet-500 border-violet-500 ml-3 hidden md:inline-flex">
							{type.charAt(0).toUpperCase() + type.slice(1)}
						</div>
					</h1>
					<button className="text-violet-500" onClick={closePopup}>
						<svg
							className="w-8 h-8"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
				<p className="text-gray-700 mt-10 max-h-48 overflow-y-auto">
					{text}
				</p>
				<p className="text-gray-400 text-sm mt-3">
					Last edited on: {editedDateFormatted}
					<br />
					Last edited by: {editedBy}
				</p>
				<div className="flex justify-end items-center mt-10">
					<button
						className="text-red-400 py-2 px-4 rounded-md transition duration-400 ease-in-out mx-1 active:scale-95 transform items-center hover:bg-white hover:shadow-md"
						onClick={deleteNote}
					>
						Delete Note
					</button>
					<button
						className="text-white py-2 px-4 rounded-md transition duration-400 ease-in-out mx-1 active:scale-95 transform items-center bg-violet-500 hover:shadow-md"
						onClick={editNote}
					>
						Edit Note
					</button>
				</div>
			</div>
		</div>
	);
};

export default ViewNote;

import React, { useRef, useState } from "react";

const isEmpty = (value) => {
	return value === undefined || value === null || value === "";
};

const AddEditNote = (props) => {
	const { closePopup, submitFunction, noteData } = props;

	const [title, setTitle] = useState(noteData ? noteData.title : "");
	const [text, setText] = useState(noteData ? noteData.text : "");
	const [type, setType] = useState(noteData ? noteData.type : "personal");

	const titleRef = useRef();
	const textRef = useRef();

	const handleTitleChange = (e) => {
		if (e.target.value.length === 0) {
			titleRef.current.classList.add("border-red-500");
		} else {
			titleRef.current.classList.remove("border-red-500");
		}
		setTitle(e.target.value);
	};

	const handleTextChange = (e) => {
		if (e.target.value.length === 0) {
			textRef.current.classList.add("border-red-500");
		} else {
			textRef.current.classList.remove("border-red-500");
		}
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isEmpty(title) || isEmpty(text)) {
			if (isEmpty(title)) {
				titleRef.current.classList.add("border-red-500");
			}
			if (isEmpty(text)) {
				textRef.current.classList.add("border-red-500");
			}
			return;
		}

		const now = new Date();
		const data = {
			title: title,
			text: text,
			type: type,
			editedDate: now,
			id: `${now.getTime()}`,
		};

		submitFunction(data)
			.then(() => {
				closePopup();
				setTitle("");
				setText("");
				setType("personal");
			})
			.catch((error) => {
				alert(error);
			});
	};

	return (
		<div className="fixed bottom-0 left-0 w-full h-full bg-slate-900/30 z-50">
			<div className="bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg min-w-[20rem]">
				<div className="flex justify-between">
					<h1 className="text-3xl font-semibold text-violet-500">
						{noteData ? "Edit" : "Add"} Note
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
				<form className="mt-10">
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full px-3">
							<label
								className="block uppercase tracking-wide text-gray-500 text-xs font-semibold mb-2"
								htmlFor="title"
							>
								Title
							</label>
							<input
								className="appearance-none bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
								id="title"
								type="text"
								placeholder="Title"
								value={title}
								onChange={handleTitleChange}
								ref={titleRef}
							/>
						</div>
						<div className="w-full px-3">
							<label
								className="block uppercase tracking-wide text-gray-500 text-xs font-semibold mb-2"
								htmlFor="note"
							>
								Note
							</label>
							<textarea
								className="appearance-none bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full"
								id="note"
								type="text"
								placeholder="Note"
								value={text}
								onChange={handleTextChange}
								ref={textRef}
							/>
						</div>
						{/* Radio button to select betweek work and personal */}
						<div className="w-full px-3">
							<label
								className="block uppercase tracking-wide text-gray-500 text-xs font-semibold mb-2"
								htmlFor="type"
							>
								Type
							</label>
							<div className="flex flex-wrap space-x-4 items-center">
								<div className="flex space-x-2 items-center">
									<input
										id="note2"
										type="radio"
										name="type"
										value="personal"
										placeholder="personal"
										checked={type === "personal"}
										onChange={(e) =>
											setType(e.target.value)
										}
									/>
									<label
										className="tracking-wide text-gray-700 text-lg"
										htmlFor="note2"
									>
										Personal
									</label>
								</div>
								<div className="flex items-center space-x-2">
									<input
										id="note1"
										type="radio"
										name="type"
										value="work"
										placeholder="work"
										checked={type === "work"}
										onChange={(e) =>
											setType(e.target.value)
										}
									/>
									<label
										className="tracking-wide text-gray-700 text-lg"
										htmlFor="note1"
									>
										Work
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-end mt-10">
						<button
							className="text-violet-500 py-2 px-4 rounded-md transition duration-400 ease-in-out mx-1 active:scale-95 transform items-center hover:bg-white hover:shadow-md"
							onClick={() => closePopup()}
						>
							Cancel
						</button>
						<button
							className="text-white py-2 px-4 rounded-md transition duration-400 ease-in-out mx-1 active:scale-95 transform items-center bg-violet-500 hover:shadow-md"
							type="submit"
							onClick={handleSubmit}
						>
							{noteData ? "Edit" : "Add"} Note
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddEditNote;

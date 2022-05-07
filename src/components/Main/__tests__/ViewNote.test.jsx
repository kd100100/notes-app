import { fireEvent, render, screen } from "@testing-library/react";
import ViewNote from "../ViewNote";

test("should show notes data when View Note is rendered", () => {
	const noteData = {
		title: "Test Title",
		text: "Test Text",
		type: "personal",
		editedDate: new Date(2022, 1, 2),
	};

	render(<ViewNote {...noteData} />);

	const title = screen.getByRole("heading", { name: /Test Title/i });
	const text = screen.getByText(/Test Text/i);
	const type = screen.getByText(/personal/i);
	const editedDate = screen.getByText(/Edited/i);

	expect(title).toBeInTheDocument();
	expect(text).toBeInTheDocument();
	expect(type).toBeInTheDocument();
	expect(editedDate).toHaveTextContent("02/02/2022");
});

test("should call edit function for editing", () => {
	const editNoteMockFunction = jest.fn();
	const noteData = {
		title: "Test Title",
		text: "Test Text",
		type: "personal",
		editedDate: new Date(2022, 1, 2),
	};

	render(<ViewNote {...noteData} editNote={editNoteMockFunction} />);

	const editButton = screen.getByRole("button", { name: /Edit/i });
	fireEvent.click(editButton);

	expect(editNoteMockFunction).toHaveBeenCalled();
});

test("should call delete function for deleting", () => {
	const deleteNoteMockFunction = jest.fn();
	const noteData = {
		title: "Test Title",
		text: "Test Text",
		type: "personal",
		editedDate: new Date(2022, 1, 2),
	};

	render(<ViewNote {...noteData} deleteNote={deleteNoteMockFunction} />);

	const deleteButton = screen.getByRole("button", { name: /Delete/i });
	fireEvent.click(deleteButton);

	expect(deleteNoteMockFunction).toHaveBeenCalled();
});

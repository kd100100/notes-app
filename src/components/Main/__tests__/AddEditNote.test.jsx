import { fireEvent, render, screen } from "@testing-library/react";
import AddEditNote from "../AddEditNote";

describe("add new note", () => {
	test("should have empty title and text fields", () => {
		render(<AddEditNote />);

		const title = screen.getByPlaceholderText("Title");
		const text = screen.getByPlaceholderText("Note");

		expect(title).toHaveValue("");
		expect(text).toHaveValue("");
	});

	test("should call addNewNote function on submit", () => {
		const expectedData = {
			title: "Test Title",
			text: "Test Text",
			type: "personal",
		};
		var actualData;
		const addNewNoteMockFunction = jest.fn((data) => {
			actualData = data;
			return Promise.resolve();
		});
		window.alert = jest.fn();

		render(<AddEditNote submitFunction={addNewNoteMockFunction} />);

		const title = screen.getByPlaceholderText("Title");
		const text = screen.getByPlaceholderText("Note");
		const personalType = screen.getByPlaceholderText("personal");

		fireEvent.change(title, { target: { value: "Test Title" } });
		fireEvent.change(text, { target: { value: "Test Text" } });
		fireEvent.click(personalType);

		const addButton = screen.getByRole("button", { name: "Add Note" });
		fireEvent.click(addButton);

		expect(actualData.title).toBe(expectedData.title);
		expect(actualData.text).toBe(expectedData.text);
		expect(actualData.type).toBe(expectedData.type);
	});
});

describe("edit note", () => {
	test("should have existing data of note as input values", () => {
		const noteData = {
			title: "Test Title",
			text: "Test Text",
			type: "personal",
		};

		render(<AddEditNote noteData={noteData} />);

		const title = screen.getByPlaceholderText("Title");
		const text = screen.getByPlaceholderText("Note");
		const personalType = screen.getByPlaceholderText("personal");

		expect(title).toHaveValue(noteData.title);
		expect(text).toHaveValue(noteData.text);
		expect(personalType).toBeChecked();
	});

	test("should call editNote function on submit", () => {
		const noteData = {
			title: "Test Title",
			text: "Test Text",
			type: "personal",
		};
		var actualData;
		const editNoteMockFunction = jest.fn((data) => {
			actualData = data;
			return Promise.resolve();
		});
		window.alert = jest.fn();

		render(
			<AddEditNote
				submitFunction={editNoteMockFunction}
				noteData={noteData}
			/>
		);

		const title = screen.getByPlaceholderText("Title");
		const text = screen.getByPlaceholderText("Note");
		const workType = screen.getByPlaceholderText("work");

		fireEvent.change(title, { target: { value: "Test Title" } });
		fireEvent.change(text, { target: { value: "changed note" } });
		fireEvent.click(workType);

		const addButton = screen.getByRole("button", { name: "Edit Note" });
		fireEvent.click(addButton);

		expect(actualData.title).toBe(noteData.title);
		expect(actualData.text).toBe("changed note");
		expect(actualData.type).toBe("work");
	});
});

describe("fail cases", () => {
	test("should not call addNewNote function when inputs are empty", () => {
		const submitMockFunction = jest.fn();

		render(<AddEditNote submitFunction={submitMockFunction} />);

		const addButton = screen.getByRole("button", { name: "Add Note" });
		fireEvent.click(addButton);

		expect(submitMockFunction).not.toHaveBeenCalled();
	});

	test("should make border color red if inputs are empty", () => {
		const submitMockFunction = jest.fn();

		render(<AddEditNote submitFunction={submitMockFunction} />);

		const title = screen.getByPlaceholderText("Title");
		const text = screen.getByPlaceholderText("Note");
		fireEvent.change(title, { target: { value: "" } });
		fireEvent.change(text, { target: { value: "" } });

		const addButton = screen.getByRole("button", { name: "Add Note" });
		fireEvent.click(addButton);

		expect(title).toHaveClass("border-red-400");
		expect(text).toHaveClass("border-red-400");
	});
});

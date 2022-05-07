import { fireEvent, render, screen } from "@testing-library/react";
import AddNote from "../AddNote";

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

	render(<AddNote addNewNote={addNewNoteMockFunction} />);

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

describe("fail cases", () => {
	test("should not call addNewNote function when inputs are empty", () => {
		const addNewNoteMockFunction = jest.fn();

		render(<AddNote addNewNote={addNewNoteMockFunction} />);

		const addButton = screen.getByRole("button", { name: "Add Note" });
		fireEvent.click(addButton);

		expect(addNewNoteMockFunction).not.toHaveBeenCalled();
	});

	test("should make border color red if inputs are empty", () => {
		const addNewNoteMockFunction = jest.fn();

		render(<AddNote addNewNote={addNewNoteMockFunction} />);

		const addButton = screen.getByRole("button", { name: "Add Note" });
		fireEvent.click(addButton);

		const title = screen.getByPlaceholderText("Title");
		const text = screen.getByPlaceholderText("Note");

		expect(title).toHaveClass("border-red-500");
		expect(text).toHaveClass("border-red-500");
	});
});

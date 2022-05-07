import { render, screen } from "@testing-library/react";
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

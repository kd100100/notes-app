import { fireEvent, render, screen } from "@testing-library/react";
import ActionBar from "../ActionBar";

test("should render default filter type as all", () => {
	render(<ActionBar filter="all" />);

	const allFilterButton = screen.getByRole("button", { name: /all/i });
	const personalFilterButton = screen.getByRole("button", {
		name: /personal/i,
	});
	const workFilterButton = screen.getByRole("button", { name: /work/i });

	expect(allFilterButton).toHaveClass("bg-violet-500 text-white");
	expect(personalFilterButton).toHaveClass("text-gray-500");
	expect(workFilterButton).toHaveClass("text-gray-500");
});

test("should change filter type onclick", () => {
	const setFilterMockFunction = jest.fn();

	render(<ActionBar filter="all" setFilter={setFilterMockFunction} />);

	const allFilterButton = screen.getByRole("button", { name: /all/i });
	const personalFilterButton = screen.getByRole("button", {
		name: /personal/i,
	});
	const workFilterButton = screen.getByRole("button", { name: /work/i });

	fireEvent.click(personalFilterButton);
	expect(setFilterMockFunction).toHaveBeenCalledWith("personal");

	fireEvent.click(workFilterButton);
	expect(setFilterMockFunction).toHaveBeenCalledWith("work");

	fireEvent.click(allFilterButton);
	expect(setFilterMockFunction).toHaveBeenCalledWith("all");
});

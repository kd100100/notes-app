import React from "react";
import FilterButton from "./FilterButton";
import PlusIcon from "../../assets/plus-icon.png";

const ActionBar = ({ setIsAdding, filter, setFilter }) => {
	return (
		<div className="mx-2 flex items-center my-10 justify-between">
			<div className="filter-buttons flex items-center mx-3">
				<FilterButton
					isSelected={filter === "all"}
					text={"all"}
					setFilter={setFilter}
				/>
				<FilterButton
					isSelected={filter === "personal"}
					text={"personal"}
					setFilter={setFilter}
				/>
				<FilterButton
					isSelected={filter === "work"}
					text={"work"}
					setFilter={setFilter}
				/>
			</div>
			<button
				className="text-violet-500 py-2 px-4 rounded-md transition duration-400 ease-in-out mx-1 active:scale-95 transform items-center hover:bg-white hover:shadow-md hidden sm:flex"
				onClick={() => setIsAdding(true)}
			>
				<img src={PlusIcon} alt="Plus" className="w-6 mr-2" />
				Add New Note
			</button>
		</div>
	);
};

export default ActionBar;

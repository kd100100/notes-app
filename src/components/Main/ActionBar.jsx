import React from "react";
import FilterButton from "./FilterButton";
import PlusIcon from "../../assets/plus-icon.png";

const ActionBar = () => {
	return (
		<div className="mx-6 flex items-center my-10 justify-between">
			<div className="filter-buttons flex items-center -mx-1">
				<FilterButton isSelected={true} text={"All"} />
				<FilterButton isSelected={false} text={"Personal"} />
				<FilterButton isSelected={false} text={"Work"} />
			</div>
			<button className="text-violet-500 py-2 px-4 rounded-md transition duration-400 ease-in-out mx-1 active:scale-95 transform items-center hover:bg-white hover:shadow-md hidden sm:flex">
				<img src={PlusIcon} alt="Plus" className="w-6 mr-2" />
				Add New Note
			</button>
		</div>
	);
};

export default ActionBar;

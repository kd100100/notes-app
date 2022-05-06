import React from "react";

const FilterButton = ({ isSelected, text, setFilter }) => {
	return (
		<button
			className={`
                ${
					isSelected
						? "bg-violet-500 text-white"
						: "text-gray-500 hover:bg-white hover:shadow-md"
				}
                py-2 px-4 rounded-md transition duration-500 ease-in-out mx-1 active:scale-90 transform
            `}
			onClick={() => setFilter(text)}
		>
			{text.charAt(0).toUpperCase() + text.slice(1)}
		</button>
	);
};

export default FilterButton;

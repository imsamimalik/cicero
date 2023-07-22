import { useState, createElement, useRef, useEffect } from 'react';
import { CiGlobe } from "react-icons/ci";
import { FiFileText } from "react-icons/fi";
import { FaYoutube, FaPodcast } from "react-icons/fa";

const OPTIONS = [
	{
		id: 1,
		title: 'All',
		description: "Search across the internet and other focuses",
		icon: CiGlobe,
	},
	{
		id: 2,
		title: "Writing",
		description: "Search in published academic papers",
		icon: FiFileText,
	},
	{
		id: 3,
		title: "Youtube",
		description: "Discover and watch videos",
		icon: FaYoutube,
	},
	{
		id: 4,
		title: "Podcast",
		description: "Discover and listen to podcasts",
		icon: FaPodcast,
	},
];


const Dropdown = () => {
	const [showOptions, setShowOptions] = useState(false);
	const [selected, setSelected] = useState(OPTIONS[0].title)

	const dropdownRef = useRef(null);

	const handleOutsideClick = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setShowOptions(false);
		}
	};
	useEffect(() => {

		document.addEventListener('click', handleOutsideClick);

		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	const toggleOptions = (e) => {
		e.preventDefault()
		setShowOptions(!showOptions);
	};

	const handleClick = (op) => {
		setSelected(op.title)
		setShowOptions(false)
	}
	const getSelectedIcon = () => {
		const selectedOption = OPTIONS.find(op => op.title === selected);
		return selectedOption ? selectedOption.icon : null;
	};

	const iconSize = 20

	return (
		<div className='relative flex-1 dropdown' ref={dropdownRef}>
			<button
				className="flex items-center px-4 py-2 text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-300"
				onClick={toggleOptions}
			>
				{getSelectedIcon() && (
					<span className="mr-2">
						{createElement(getSelectedIcon(), { size: iconSize })}
					</span>
				)}
				{selected}
				<svg
					className={`w-5 h-5 mx-2 transition-all ${ showOptions ? 'transform rotate-180' : '' }`}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M5.293 7.707a1 1 0 0 1 1.414 0L10 11.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
					/>
				</svg>
			</button>
			{showOptions && (
				<div className="absolute left-0 z-10 mt-2 bg-white rounded-md shadow-lg">
					<div className="flex flex-wrap justify-between gap-4 py-3 px-6 max-w-[450px]">

						{OPTIONS.map(op => (

							<div key={op.id} onClick={() => handleClick(op)} className=" max-w-[175px] flex-col flex items-start px-4 py-2 cursor-pointer hover:bg-gray-100">
								<div className='flex items-center gap-3'>
									{createElement(op.icon, { size: 15, className: op.title === selected ? "text-accent" : "" })}
									<p className={`text-xl font-medium text-gray-800 ${ op.title === selected ? "text-accent" : "text-gray-800" }`}>{op.title}</p>
								</div>
								<p className="text-[15px] text-gray-600">
									{op.description}
								</p>
							</div>
						))}

					</div>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
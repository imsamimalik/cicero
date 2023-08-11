"use client";
import Dropdown from "./Dropdown";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useContentStore } from "@/store/store";
import TextareaAutosize from 'react-textarea-autosize';


const Input = () => {
	const globalInput = useContentStore((state) => state.globalInput);
	const setGlobalInput = useContentStore((state) => state.setGlobalInput);


	const populateContent = useContentStore((state) => state.populateContent);

	const handleSubmit = (e) => {
		e.preventDefault();
		populateContent(globalInput);
		// setInput("")
	};

	// call handleSubmit when Enter is pressed
	const handleKeyDown = (e) => {
		if (globalInput && e.key === "Enter") {
			e.preventDefault();
			populateContent(globalInput);
			// setInput("")
		}
	};

	return (
		<section className="flex flex-col items-center justify-center my-20 bg-white md:w-4/5 ">
			<div className="flex items-center w-full mx-auto md:w-3/5">
				<div className="relative flex-1 px-4 py-2 border shadow-md rounded-xl border-primary">
					<TextareaAutosize
						placeholder="Ask anything..."
						rows={1}
						maxRows={20}
						className="w-full p-3 overflow-auto text-xl font-medium resize-none focus:outline-none"
						value={globalInput}
						onKeyDown={(e) => handleKeyDown(e)}
						onChange={(e) => setGlobalInput(e.target.value)}
					/>
					<div className="flex justify-between">
						<Dropdown />
						<button disabled={!globalInput} onClick={handleSubmit}>
							<BsFillArrowRightCircleFill
								className={`${ globalInput ? "fill-primary" : "fill-primary/75 cursor-not-allowed" }`}
								size={35}
							/>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Input;

"use client";
import Dropdown from "./Dropdown";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useContentStore } from "@/store/store";
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
				<div className="flex-1 relative px-4 h-[100px] py-2 rounded-xl border shadow-md border-primary">
					<input
						placeholder="Ask anything..."
						rows={1}
						className="w-full h-10 p-3 overflow-auto text-xl font-medium focus:outline-none"
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

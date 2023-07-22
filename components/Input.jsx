"use client";
import Image from "next/image";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { BsFillArrowRightCircleFill, BsArrowRepeat } from "react-icons/bs";
import { useContentStore } from "@/store/store";
const Input = () => {
	const [input, setInput] = useState("");

	const populateContent = useContentStore((state) => state.populateContent);

	const handleSubmit = (e) => {
		e.preventDefault()
		setInput("")
		populateContent()
	}


	return (
		<section className="flex justify-center w-full my-20 bg-white ">
			<div className="flex items-center w-full mx-auto md:w-3/5">
				<Image
					src="/assets/images/avatar.png"
					width={150}
					height={140}
					alt="Avatar"
					className="hidden -mt-8 md:block"
				/>
				<div className="flex-1 relative px-4 h-[100px] py-2 border shadow-md border-primary">
					<BsArrowRepeat
						className=" absolute -top-5 right-20 rotate-[110deg] bg-purple p-2 rounded-full"
						size={40}
					/>
					<input
						placeholder="Ask anything..."
						className="w-full h-10 p-3 text-xl font-medium focus:outline-none"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<div className="flex justify-between">
						<Dropdown />
						<button onClick={handleSubmit} >
							<BsFillArrowRightCircleFill
								className=" fill-primary"
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

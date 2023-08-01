import { GoArrowRight } from "react-icons/go";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { useContentStore } from "@/store/store";

const Content = () => {

	const referencesLoader = useContentStore((state) => state.referencesLoader);
	const relatedLoader = useContentStore((state) => state.relatedLoader);
	const content = useContentStore((state) => state.content);
	const setGlobalInputReset = useContentStore(
		(state) => state.setGlobalInputReset
	);
	const globalInput = useContentStore((state) => state.globalInput);


	return (
		<article className="flex flex-col items-center justify-between w-full gap-10 xl:items-start xl:flex-row">
			<div>
				{/* ANS */}
				<div
					className={`w-full px-8 py-6 mx-auto bg-white border border-black md:min-w-[700px] md:w-4/6 md:px-14`}
				>
					<h2 className="pb-6 text-2xl font-bold text-black">
						{globalInput}
					</h2>
					<p className="text-base md:text-xl">{content?.cynthesis}</p>
					<div className="w-2/3 mx-auto my-16 border border-primary" />
					{/* THUMBS */}
					<div className="flex justify-center gap-20 xl:gap-0 xl:justify-evenly">
						<FiThumbsUp size={40} className=" text-primary" />
						<FiThumbsDown size={40} className=" text-primary" />
					</div>
				</div>
				{/* BUTTONS */}

				<div className="flex flex-wrap justify-center gap-20 py-10">
					<button className="px-12 py-2 text-xl border-2 rounded-full shadow-xl text-accent border-accent">
						NBER
					</button>
					<button className="px-12 py-2 text-xl border-2 rounded-full shadow-xl text-accent border-accent">
						Cycle Dating
					</button>
					<button className="px-12 py-2 text-xl border-2 rounded-full shadow-xl text-accent border-accent">
						Committee
					</button>
				</div>
			</div>

			<div className="flex flex-col flex-wrap items-center gap-10">
				{/* REFRENCES */}
				<div
					className={`w-[20rem] ${ referencesLoader ? " opacity-0" : "opacity-100"
						} transition-opacity duration-500 px-8 py-6 border border-primary shadow-md`}
				>
					<h3 className="pb-6 text-2xl font-bold text-black">
						References
					</h3>
					<ol className="pl-6 text-xl font-medium list-decimal list-inside marker:text-primary ">
						{content?.reference?.map((el, index) => (
							<li key={el.url + index}>
								<a className="hover:underline" title={el.title} href={el.url}>
									{el.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]}
								</a>
							</li>
						))}
					</ol>
				</div>

				{/* RELATED QUESTIONS */}
				<div
					className={`w-[20rem] ${ relatedLoader ? "opacity-0" : "opacity-100"
						} transition-opacity duration-500 px-8 py-6 bg-purple shadow-md`}
				>
					<h3 className="pb-6 text-2xl font-bold text-black">
						Related Questions
					</h3>
					<ul className="text-xl font-medium">
						{content?.questions?.map((el) => (
							<li
								key={el}
								onClick={() => setGlobalInputReset(el)}
								className="flex items-center justify-center px-1 transition-colors rounded-lg cursor-pointer hover:text-white"
							>
								<span
									title={el}
									className="max-w-[220px] pb-5 border-[#ffffff83] border-b-[1px] "
								>
									{el.length > 40
										? el.substr(0, 40) + "..."
										: el}
								</span>
								<GoArrowRight size={30} color="white" />
							</li>
						))}
					</ul>
				</div>
			</div>
		</article>
	);
};

export default Content;

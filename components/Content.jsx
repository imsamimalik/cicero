import { GoArrowRight } from "react-icons/go";
import { useContentStore } from "@/store/store";
import Loader from "@/components/Loader";

const Content = () => {
	const referencesLoader = useContentStore((state) => state.referencesLoader);
	const relatedLoader = useContentStore((state) => state.relatedLoader);
	const content = useContentStore((state) => state.content);
	const setGlobalInputReset = useContentStore(
		(state) => state.setGlobalInputReset
	);
	const globalInput = useContentStore((state) => state.globalInput);
	const loading = useContentStore((state) => state.loading);

	return (
		<article className="flex flex-col items-center justify-between gap-10 xl:items-start xl:flex-row">
			{loading ? (
				<div className="flex flex-col ">
					<Loader />{" "}
				</div>
			) : (
				<>
					{/* ANS */}
					<div
						className={`w-full px-8 py-6 mx-auto bg-white border border-black md:px-14`}
					>
						<h2 className="pb-6 text-2xl font-bold text-black">
							{globalInput}
						</h2>
						<p
							className="text-base md:text-xl"
							dangerouslySetInnerHTML={{
								__html: content?.cynthesis,
							}}
						/>

						<div className="w-2/3 mx-auto my-16 border border-primary" />
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
								{content?.reference?.map((el) => (
									<li key={el.id}>
										<a
											className="hover:underline"
											href={el.url}
											target="_blank"
											rel="noreferrer"
											title={el.title}
										>
											{el.title.length > 80
												? el.title.substring(0, 80) +
												"..."
												: el.title}
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
											{el.length > 60
												? el.substring(0, 60) + "..."
												: el}
										</span>
										<GoArrowRight size={30} color="white" />
									</li>
								))}
							</ul>
						</div>
					</div>
				</>
			)}
		</article>
	);
};

export default Content;

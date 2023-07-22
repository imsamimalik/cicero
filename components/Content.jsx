import { GoArrowRight } from "react-icons/go";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { useContentStore } from "@/store/store";

const Content = () => {

	const referencesLoader = useContentStore((state) => state.referencesLoader);
	const relatedLoader = useContentStore((state) => state.relatedLoader);
	return (
		<article className="flex flex-col items-center justify-between w-full gap-10 xl:items-start xl:flex-row">
			<div>


				{/* ANS */}
				<div className="w-full px-8 py-6 mx-auto bg-white border border-black md:w-4/6 md:px-14">
					<h2 className="pb-6 text-2xl font-bold text-black">
						What is Recession
					</h2>
					<p className="text-base md:text-xl">
						A recession is a period of reduced economic activity that is
						accompanied by a significant increase in the unemployment
						rate 1,2 . There is no single definition of a recession, but
						it is generally agreed that it involves a significant,
						pervasive, and persistent decline in economic activity1 .
						Some economists use two consecutive quarters of negative
						gross domestic product (GDP) growth as a rule of thumb to
						identify a recession, although more complex formulas are
						also used1 . The National Bureau of Economic Research (NBER)
						Business Cycle Dating Committee defines a recession as “a
						significant decline in economic activity that is spread
						across the economy and that lasts more than a few months”3,4
						. The committee typically tracks variables such as real
						personal income minus government transfers, employment,
						various forms of real consumer spending, and industrial
						production to evaluate the state of the business cycle3
					</p>
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
				<div className={`w-[20rem] ${ referencesLoader ? " opacity-0" : "opacity-100" } transition-opacity duration-500 px-8 py-6 border border-primary shadow-md`}>
					<h3 className="pb-6 text-2xl font-bold text-black">
						References
					</h3>
					<ol className="pl-6 text-xl font-medium list-decimal list-inside marker:text-primary ">
						<li>investopeda</li>
						<li>rba.gov.au</li>
						<li>White House</li>
						<li>imf</li>
					</ol>
				</div>

				{/* RELATED QUESTIONS */}
				<div className={`w-[20rem] ${ relatedLoader ? "opacity-0" : "opacity-100" } transition-opacity duration-500 px-8 py-6 bg-purple shadow-md`}>
					<h3 className="pb-6 text-2xl font-bold text-black">
						Related Questions
					</h3>
					<ul className="text-xl font-medium">
						<li className="flex items-center justify-center">
							<span className="max-w-[220px] pb-5 border-[#ffffff83] border-b-[1px]">
								what are the causes of a recession?
							</span>
							<GoArrowRight size={30} color="white" />

						</li>
						<li className="flex items-center justify-center">
							<span className="max-w-[220px] mt-5 pb-5 border-[#ffffff83] border-b-[1px]">
								how do recessions affect different industries?
							</span>
							<GoArrowRight size={30} color="white" />
						</li>
						<li className="flex items-center justify-center ">
							<span className="max-w-[220px] mt-5">
								what are some strategies to mitigate the impact of a recession on businesses?
							</span>
							<GoArrowRight size={30} color="white" />
						</li>
					</ul>
				</div>
			</div>

		</article>
	);
};

export default Content;
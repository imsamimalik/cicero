import { MdThumbUp } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

const ARTICLES = [
	{
		id: 1,
		title: "report finds Boris Johnson deliberately misled UK Parliament over lockdown parties",
		description:
			"A scathing report by a committee of lawmakers found that former British Prime Minister Boris Johnson deliberately misled the UK Parliament over COVID lockdown-flouting parties at his Downing Street office",
		likes: 216,
		views: 520,
	},
	{
		id: 2,
		title: "Reddit CEO pushes back against blackout",
		description:
			"Reddit CEO Steve Huffman recently pushed back against a blackout that affected many of the site's subreddits in protest of upcoming API changes. The blackout involved more than 8,000 subreddits, limitin",
		likes: 180,
		views: 320,
	},
	{
		id: 3,
		title: "examples of mathematical problems used in post-quantum cryptography",
		description:
			"A scathing report by a committee of lawmakers found that former British Prime Minister Boris Johnson deliberately misled the UK Parliament over COVID lockdown-flouting parties at his Downing Street offic",
		likes: 96,
		views: 210,
	},
];

const PopularNow = () => {
	return (
		<section className="flex flex-col w-full">
			<div className="flex flex-col w-full mx-auto md:w-3/5">
				<h2 className="my-20 text-2xl font-bold">Popular Now</h2>

				<div className="flex flex-col w-full gap-10">
					{ARTICLES.map((article) => (
						<div
							key={article.id}
							className="flex flex-col w-full p-6 bg-purple article"
						>
							<h3 className="text-base font-medium  md:text-xl">
								{article.title}
							</h3>
							<p className="text-sm  md:text-lg">{article.description}</p>
							<div className="flex items-center w-full gap-10 ml-4 text-white">
								<div className="flex items-center gap-2">
									<MdThumbUp color="white" />
									<span>{article.likes}</span>
								</div>
								<div className="flex items-center gap-2">
									<AiFillEye color="white" />
									<span>{article.views}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default PopularNow;

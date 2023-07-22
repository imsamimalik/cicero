const Sidebar = () => {
	return (
		<div className="sticky flex-col items-center hidden w-64 md:flex">
			<div>
				<ul className="p-4 text-xl font-medium">
					<li className="mb-6">Home</li>
					<li className="mb-6">People</li>
					<li className="mb-6">Topics</li>
					<li className="mb-6">Library</li>
				</ul>
				<div className="h-16">
				</div>
				<ul className="p-4 text-xl font-medium">
					<li className="mb-6">Profile</li>
					<li className="mb-6">Contact us</li>
					<li className="mb-6">What is Cicero</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;

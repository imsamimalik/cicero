// const Loader = () => {
// 	return (
// 		<svg
// 			fill="none"
// 			viewBox="0 0 66 66"
// 			width={50}
// 			color="#000"
// 			overflow="visible"
// 			className=" animate-[spin_1.22807s_linear_0s_infinite_normal_none_running]"
// 		>
// 			<circle
// 				cx="33"
// 				cy="33"
// 				r="28"
// 				stroke="currentColor"
// 				strokeDasharray="150"
// 				strokeDashoffset="325"
// 				strokeLinecap="round"
// 				strokeWidth="5.2"
// 			></circle>
// 		</svg>
// 	);
// }

// export default Loader

import { Skeleton } from "@/components/ui/skeleton"

function Loader() {
	return (
		<div className="flex items-center space-x-4">
			<div className="flex flex-col space-y-9">
				<Skeleton className="h-4 w-[500px]" />
				<Skeleton className="h-4 w-[500px]" />
				<Skeleton className="h-4 w-[500px]" />
				<Skeleton className="h-4 w-[500px]" />
				<Skeleton className="h-4 w-[500px]" />
				<Skeleton className="h-4 w-[500px]" />
				<Skeleton className="h-4 w-[500px]" />
			</div>
			<div className="space-y-6">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
				<div className="h-1 "></div>
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	)
}

export default Loader

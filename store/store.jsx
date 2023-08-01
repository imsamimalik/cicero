import { create } from "zustand";

const fetchData = async (input) => {
	const response = await fetch(
		"https://rams901-cicero-qa-api.hf.space/run/predict",
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				data: [input],
			}),
		}
	);

	const data = await response.json();

	return data.data[0];
};
export const useContentStore = create((set, get) => ({
	globalInput: "",
	content: "",
	loading: false,
	referencesLoader: true,
	relatedLoader: true,

	populateContent: async (input) => {
		set({
			content: "",
			loading: false,
			referencesLoader: true,
			relatedLoader: true,
		});

		set({ loading: true });
		const data = await fetchData(input);
		set({ content: data, loading: false });
		setTimeout(() => {
			set({ referencesLoader: false });
		}, 2000);
		setTimeout(() => {
			set({ relatedLoader: false });
		}, 3500);
	},

	setGlobalInput: (input) => set({ globalInput: input }),

	setGlobalInputReset: async (input) => {
		set({
			globalInput: input,
			content: "",
			loading: false,
			referencesLoader: true,
			relatedLoader: true,
		});
		await get().populateContent(get().globalInput);
	},
}));

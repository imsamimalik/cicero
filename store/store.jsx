import { create } from 'zustand'

export const useContentStore = create((set) => ({
	content: '',
	loading: false,
	referencesLoader: true,
	relatedLoader: true,
	populateContent: () => {
		set({ loading: true });
		setTimeout(() => {
			set({ content: "Not empty", loading: false });
		}, 3000);
		setTimeout(() => {
			set({ referencesLoader: false });
		}, 4000);
		setTimeout(() => {
			set({ relatedLoader: false });
		}, 5000);
	},

}))
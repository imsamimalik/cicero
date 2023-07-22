import { create } from 'zustand'

export const useContentStore = create((set) => ({
	content: '',
	loading: false,
	populateContent: () => {
		set({ loading: true });
		setTimeout(() => {
			set({ content: "Not empty", loading: false });
		}, 3000);
	},

}))
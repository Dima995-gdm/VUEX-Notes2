import { createStore } from 'vuex'

import { getItem } from '@/utils/localStorage'

export const store = createStore({
	state: {
		notes: [
			{
				title: 'Learn Vue 3',
				tags: ['work']
			},
			{
				title: 'Learn Vue 3',
				tags: ['work', 'home']
			},
			{
				title: 'Learn Vue 3',
				tags: []
			}
		]
	},
	mutations: {
		addNote(state, note) {
			state.notes.push(note)
		},
		removeNote(state, index) {
			state.notes.splice(index, 1)
		}
	},
	getters: {
		getNotes(state) {
			return getItem(state)

		},
	}
})

<template>
	<Form @onSubmit="handleSubmit" />
	<List @onRemove="handleRemove" :items="getNotes" />
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'

import { setItem } from '@/utils/localStorage'

export default {
	components: { Form, List },
	computed: {
		getNotes() {
			return this.$store.getters.getNotes
		}
	},
	mounted() {
		this.$store.subscribe((mutation, state) => {
			if (mutation.type === 'addNote' || mutation.type === 'removeNote') {
				setItem(state.notes)
			}
		})
	},
	methods: {
		handleSubmit({ title, selectedTags }) {
			const note = {
				title: title,
				tags: [...selectedTags]
			}
			this.$store.commit('addNote', note)
		},
		handleRemove(index) {
			this.$store.commit('removeNote', index)
		}
	}
}
</script>

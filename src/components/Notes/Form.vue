<template>
    <div class="note-form__wrapper">
        <form class="note-form" @submit.prevent="onSubmit">
            <textarea required v-model="value" placeholder="Type ur note"/>
            <TagsList :tagActive="tags.active"  @onItemClick="handleTagClick" :items="tags.all" />
            <button class="btn btnPrimary" type="submit">Add new note</button>
        </form>
    </div>
</template>


<script>
import TagsList from '@/components/UI/TagsList.vue'

export default {
    components: {TagsList},
    data() {
        return {
            value: '',
            tags: {
                active: '',
                all: ['home', 'work', 'travel'],
                selected: []
            }

        }
    },
    methods: {
        onSubmit() {
            this.$emit('onSubmit', {title: this.value, selectedTags: this.tags.selected })
            this.value = ''
            this.tags.selected = []
            this.tags.active = ''
        },
        handleTagClick(tag) {
            this.tags.active = tag
            const isInclude = this.tags.selected.includes(tag)
    
            if (!isInclude) {
                this.tags.selected.push(tag)
            }

        }
    }
}
</script>


<style lang="scss">
    .note-form__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .note-form {
        display: flex;
        flex-direction: column;
        max-width: 600px;
        width: 100%;

        textarea {
        margin-bottom: 0;
        }
    }


</style>
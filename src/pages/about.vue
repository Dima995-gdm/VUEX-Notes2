<template>
    <h1>Все пользователи:</h1>
    <ul>
        <li v-for="user in getAllUsers" :key="user.id">
            <p>{{ user.id }}</p>
            <p>{{ user.name }}</p>
            <p>{{ user.admin ? 'Админ' : 'Обычный юзер' }}</p>
        </li>
    </ul>
    <p>{{ getUsersLength }}</p>
</template>


<script>
export default {
    computed: {
        getAllUsers() {
            return this.$store.getters.getAllUsers
        },
        getUsersLength() {
            return this.$store.getters.getUsersLength
        }
    }
}
</script>
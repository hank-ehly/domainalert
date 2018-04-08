<template>
    <main>
        <h1>Dashboard</h1>
        <button @click="onClickLogout">Logout of Facebook</button>
        <router-link :to="{ name: 'Landing' }">Go to landing</router-link>

        <ul>
            <li v-for="user in users" :key="user.id">{{ user.email }} {{ user.fb_user_id }}</li>
        </ul>

        <img v-if="userHasPicture" :src="user.picture.data.url" :alt="user.name">

        <form @submit="onSubmit($event)">
            <input type="text" v-model.trim="domain" placeholder="domain">
            <p>Domain: {{ domain }}</p>
            <button type="submit" :disabled="!validateForm()">Register</button>
        </form>
    </main>
</template>

<script>
    import { User } from '../resources'
    import { facebookService } from '../core'
    import router from '../router'

    export default {
        name: 'Dashboard',

        data() {
            return {
                domain: '',
                users: [],
                user: facebookService.cachedUser
            }
        },

        computed: {
            userHasPicture() {
                console.log(this.user)
                return this.user && this.user.picture && this.user.picture.data && this.user.picture.data.url
            }
        },

        async created() {
            try {
                const response = await User.get()
                this.users = response.data
            } catch (e) {
                console.log(e) // TODO: Display error message
            }
        },

        methods: {
            validateForm() {
                return /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/.test(this.domain)
            },

            onSubmit(e) {
                if (this.validateForm()) {
                    return true
                }
                e.preventDefault()
            },

            async onClickLogout() {
                await facebookService.logout()
                router.push({path: '/'})
            }
        }
    }
</script>

<style scoped>
</style>

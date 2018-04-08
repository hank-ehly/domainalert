<template>
    <div>
        <div class="col-md-12 col-lg-8">
            <div class="jumbotron">
                <h1 class="mb-4">Hello {{ user.first_name }}</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>

                <p class="lead">
                    <a class="btn btn-primary btn-lg mt-2" href="#" role="button">Learn more</a>
                </p>
            </div>

            <div class="card mb-4">
                <div class="card-block">
                    <ul>
                        <li v-for="user in users" :key="user.id">{{ user.email }} {{ user.fb_user_id }}</li>
                    </ul>

                    <form @submit="onSubmit($event)">
                        <input type="text" v-model.trim="domain" placeholder="domain">
                        <p>Domain: {{ domain }}</p>
                        <button type="submit" :disabled="!validateForm()">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { User } from '../resources'
    import { authService } from '../core'

    export default {
        name: 'Dashboard',

        data() {
            return {
                domain: '',
                users: []
            }
        },

        computed: {
            user() {
                return authService.currentUser
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
            }
        }
    }
</script>

<style scoped>
</style>

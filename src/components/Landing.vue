<template>
    <main>
        <h1>Landing</h1>
        <router-link v-if="isAuthenticated" :to="{ name: 'Dashboard' }">Go to dashboard</router-link>
        <button v-if="!isAuthenticated" class="btn btn-primary" @click="login">Login with Facebook</button>
    </main>
</template>

<script>
    import { facebookService } from '../core'
    import router from '../router'

    export default {
        name: 'Landing',
        computed: {
            isAuthenticated() {
                return facebookService.isAuthenticated()
            }
        },
        methods: {
            login() {
                facebookService.login().then(() => {
                    router.push({path: '/dashboard'})
                })
            }
        }
    }
</script>

<style scoped>

</style>

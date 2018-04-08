<template>
    <div id="app">
        <router-view/>

        <button v-if="isDev" @click="logout">Logout of Facebook</button>
    </div>
</template>

<script>
    import { facebookService } from './core'

    export default {
        name: 'App',
        data: function () {
            return {
                isDev: process.env.NODE_ENV === 'development'
            }
        },
        methods: {
            logout() {
                facebookService.logout()
            }
        }
    }
</script>

<style lang="scss">
    @import '~bootstrap/scss/bootstrap';
</style>

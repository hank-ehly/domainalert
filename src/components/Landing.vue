<template>
    <main>
        <h1>Landing</h1>
        <router-link v-if="isAuthenticated" :to="{ name: 'Dashboard' }">Go to dashboard</router-link>
        <button v-if="!isAuthenticated" class="btn btn-primary" @click="login">Login with Facebook</button>
    </main>
</template>

<script>
    import { facebookService, logger, userService } from '../core'
    import { User } from '../resources'
    import router from '../router'

    export default {
        name: 'Landing',
        data() {
            return {
                isAuthenticated: false
            }
        },
        methods: {
            async login() {
                try {
                    await facebookService.login()
                } catch (e) {
                    logger.debug('Failed to login..', e)
                }

                try {
                    const user = await facebookService.api('/me', {fields: ['email', 'id', 'picture', 'first_name']})
                    logger.debug('Obtained current user from Facebook', user)

                    const existingUser = await User.query({search: user.id})
                    if (!existingUser.data.length) {
                        logger.debug('No user exists in database. Creating.')
                        const response = await User.save({}, {email: user.email, fb_user_id: user.id})
                        userService.currentUser = response.data
                    }

                    router.push({path: '/dashboard'})
                } catch (e) {
                    logger.debug('Failed to create user..', e)
                }
            }
        },
        created() {
            facebookService.isAuthenticated().then(() => {
                this.isAuthenticated = true
            }).catch(() => {
            })
        }
    }
</script>

<style scoped>

</style>

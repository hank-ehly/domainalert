<template>
    <div class="col-md-12 col-lg-8">
        <router-link v-if="isAuthenticated" :to="{ name: 'Dashboard' }">Go to dashboard</router-link>
        <button v-if="!isAuthenticated" class="btn btn-primary" @click="login">Login with Facebook</button>
    </div>
</template>

<script>
    import { facebookService, authService, logger } from '../core'
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
                let fbUser

                try {
                    await authService.login()
                } catch (e) {
                    logger.debug('Failed to login..', e)
                    return
                }

                try {
                    fbUser = await facebookService.api('/me', {fields: ['email', 'id', 'picture', 'first_name']})
                    logger.debug('Obtained current user from Facebook', fbUser)
                } catch (e) {
                    logger.debug('Failed to obtain user info from Facebook', e)
                    return
                }

                try {
                    const userSearchRes = await User.query({search: fbUser.id})

                    if (!userSearchRes.data.length) {
                        logger.debug('No user exists in database. Creating.')
                        const userCreateRes = await User.save({}, {email: fbUser.email, fb_user_id: fbUser.id})
                        authService.setCurrentUser(userCreateRes.data)
                    }

                    router.push({path: '/dashboard'})
                } catch (e) {
                    logger.debug('Failed to create user..', e)
                }
            }
        },
        async created() {
            logger.debug('[Landing] created')
            this.isAuthenticated = await authService.isAuthenticated()
        }
    }
</script>

<style scoped>

</style>

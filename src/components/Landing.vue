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
                    let userSearchResponse = await User.query({search: fbUser.id})
                    let user

                    if (userSearchResponse.data.length) {
                        logger.debug('Found user in db')
                        user = userSearchResponse.data[0]
                    } else {
                        logger.debug('No user exists in database. Creating.')
                        let userCreateResponse = await User.save({}, {email: fbUser.email, fb_user_id: fbUser.id})
                        user = userCreateResponse.data
                    }

                    authService.setCurrentUser(Object.assign(user, fbUser))
                    router.push({path: '/dashboard'})
                } catch (e) {
                    logger.debug('Failed to create user..', e)
                }
            }
        },
        async created() {
            logger.debug('[Landing] created')
            if (await authService.isAuthenticated()) {
                this.isAuthenticated = true
            }
        }
    }
</script>

<style scoped>

</style>

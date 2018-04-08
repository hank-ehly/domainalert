import { facebookService, logger } from './index'
import { User } from '../resources'

class AuthService {
    kUserCache = 'kUserCache'

    get currentUser() {
        try {
            return JSON.parse(localStorage.getItem(this.kUserCache))
        } catch (e) {
            return {}
        }
    }

    isAuthenticated() {
        return facebookService.isLoggedIn()
    }

    setCurrentUser(obj) {
        try {
            localStorage.setItem(this.kUserCache, JSON.stringify(obj))
        } catch (e) {
            throw e
        }
    }

    login() {
        return facebookService.login()
    }

    logout() {
        localStorage.removeItem(this.kUserCache)
        return facebookService.logout()
    }

    async syncUserCache() {
        let user, fbUser

        if (!await this.isAuthenticated()) {
            logger.debug('Cannot update user cache because user is not logged in')
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
            let userId = facebookService.getUserID()
            user = await User.query({}, {search: userId})
        } catch (e) {
            logger.debug(e)
            return
        }

        if (user && user.data && user.data.length) {
            let mergedUserObj = Object.assign(user.data[0], fbUser)
            this.setCurrentUser(mergedUserObj)
            logger.debug('Updated user cache with data', user.data[0])
        } else {
            logger.debug('Error: no user data available.')
        }
    }
}

export default new AuthService()

import { logger } from './index'

class FacebookService {
    login() {
        return new Promise((resolve, reject) => {
            window.FB.login(function (response) {
                if (response.status === 'connected') {
                    logger.debug('Successfully logged in via Facebook', response)
                    resolve(response)
                } else {
                    logger.debug('Failed to login via Facebook', response)
                    reject(response)
                }
            }, {scope: 'public_profile,email'})
        })
    }

    isAuthenticated() {
        return new Promise((resolve, reject) => {
            window.FB.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                    logger.debug('getLoginStatus returned "connected" status')
                    resolve(response)
                } else {
                    logger.debug('User not authenticated via Facebook')
                    reject(response)
                }
            })
        })
    }
}

export default new FacebookService()

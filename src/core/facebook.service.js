import { logger } from './index'

class FacebookService {
    api(path, method, params) {
        return new Promise((resolve, reject) => {
            window.FB.api(path, method, params, response => {
                if (!response || response.error) {
                    if (response.error) {
                        reject(response.error)
                    } else {
                        reject(response)
                    }
                } else {
                    resolve(response)
                }
            })
        })
    }

    login() {
        return new Promise((resolve, reject) => {
            window.FB.login(response => {
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

    isLoggedIn() {
        return new Promise(resolve => {
            window.FB.getLoginStatus(response => {
                logger.debug('[FacebookService] getLoginStatus', response.status === 'connected')
                resolve(response.status === 'connected')
            })
        })
    }

    logout() {
        return new Promise(resolve => {
            window.FB.logout(response => {
                logger.debug('Successfully logged out of Facebook', response)
                resolve(true)
            })
        })
    }

    logPageView() {
        logger.debug('logging page view')
        window.FB.AppEvents.logPageView()
    }

    getUserID() {
        return window.FB.getUserID()
    }
}

export default new FacebookService()

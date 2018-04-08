import { logger } from './index'

class FacebookService {
    api(path, method, params) {
        return new Promise((resolve, reject) => {
            if (window.hasOwnProperty('FB')) {
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
            } else {
                reject(new Error('FB is not defined'))
            }
        })
    }

    login() {
        return new Promise((resolve, reject) => {
            if (window.hasOwnProperty('FB')) {
                window.FB.login(response => {
                    if (response.status === 'connected') {
                        logger.debug('Successfully logged in via Facebook', response)
                        resolve(response)
                    } else {
                        logger.debug('Failed to login via Facebook', response)
                        reject(response)
                    }
                }, {scope: 'public_profile,email'})
            } else {
                reject(new Error('FB is not defined'))
            }
        })
    }

    isLoggedIn() {
        return new Promise(resolve => {
            if (window.hasOwnProperty('FB')) {
                window.FB.getLoginStatus(response => {
                    logger.debug('[FacebookService] getLoginStatus', response.status === 'connected')
                    resolve(response.status === 'connected')
                })
            } else {
                logger.debug('[FacebookService] window does not have FB object')
                resolve(false)
            }
        })
    }

    logout() {
        if (window.hasOwnProperty('FB')) {
            window.FB.logout(response => {
                logger.debug('Successfully logged out of Facebook', response)
            })
        }
    }

    logPageView() {
        if (window.hasOwnProperty('FB')) {
            logger.debug('logging page view')
            window.FB.AppEvents.logPageView()
        }
    }

    getUserID() {
        return window.hasOwnProperty('FB') ? window.FB.getUserID() : null
    }
}

export default new FacebookService()

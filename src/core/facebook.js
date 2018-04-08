import { logger } from './index'

class FacebookService {
    get api() {
        if (window.hasOwnProperty('FB')) {
            return window.FB
        } else {
            return new FacebookServiceStub()
        }
    }

    login() {
        return new Promise((resolve, reject) => {
            this.api.login(response => {
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
            this.api.getLoginStatus(response => {
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

    getUserID() {
        return this.api.getUserID()
    }

    logout() {
        this.api.logout(response => {
            logger.debug('Successfully logged out of Facebook', response)
        })
    }

    logPageView() {
        logger.debug('logging page view')
        this.api.AppEvents.logPageView()
    }
}

class FacebookServiceStub {
    get AppEvents() {
        return {
            logPageView() {
                logger.debug('[FacebookServiceStub] AppEvents.logPageView')
            }
        }
    }

    login() {
        logger.debug('[FacebookServiceStub] login')
    }

    isAuthenticated() {
        logger.debug('[FacebookServiceStub] isAuthenticated')
    }

    getUserID() {
        logger.debug('[FacebookServiceStub] getUserID')
    }

    logout() {
        logger.debug('[FacebookServiceStub] logout')
    }

    logPageView() {
        logger.debug('[FacebookServiceStub] logPageView')
    }
}

export default new FacebookService()

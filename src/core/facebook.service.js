import { logger, userService } from './index'

class FacebookService {
    get _service() {
        if (window.hasOwnProperty('FB')) {
            return window.FB
        } else {
            return new FacebookServiceStub()
        }
    }

    api(path, method, params) {
        return new Promise((resolve, reject) => {
            this._service.api(path, method, params, response => {
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
            this._service.login(response => {
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
            this._service.getLoginStatus(response => {
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
        return this._service.getUserID()
    }

    logout() {
        userService.clearCache()
        this._service.logout(response => {
            logger.debug('Successfully logged out of Facebook', response)
        })
    }

    logPageView() {
        logger.debug('logging page view')
        this._service.AppEvents.logPageView()
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

    api() {
        logger.debug('[FacebookServiceStub] api')
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

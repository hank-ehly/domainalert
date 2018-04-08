class UserService {
    kUserCache = 'kUserCache'

    get currentUser() {
        try {
            return JSON.parse(localStorage.getItem(this.kUserCache))
        } catch (e) {
            return {}
        }
    }

    set currentUser(obj) {
        try {
            localStorage.setItem(this.kUserCache, JSON.stringify(obj))
        } catch (e) {
            throw e
        }
    }

    clearCache() {
        localStorage.removeItem(this.kUserCache)
    }
}

export default new UserService()

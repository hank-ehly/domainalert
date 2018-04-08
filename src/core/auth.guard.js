import { authService } from './index'

export default async function isAuthenticated(to, from, next) {
    function redirectToLanding() {
        next({path: '/', query: {redirect: to.fullPath}})
    }

    if (to.matched.some(record => record.meta.requiresAuth)) {
        try {
            if (await authService.isAuthenticated()) {
                next()
            } else {
                redirectToLanding()
            }
        } catch (e) {
            redirectToLanding()
        }
    } else {
        next()
    }
}

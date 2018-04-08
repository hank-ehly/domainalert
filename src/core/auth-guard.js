import { authService } from './index'

export default async function isAuthenticated(to, from, next) {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        try {
            if (await authService.isAuthenticated()) {
                next()
            } else {
                next({path: '/', query: {redirect: to.fullPath}})
            }
        } catch (e) {
            next({path: '/', query: {redirect: to.fullPath}})
        }
    } else {
        next()
    }
}

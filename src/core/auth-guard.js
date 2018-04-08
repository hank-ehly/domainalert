import { facebookService } from './index'

export default async function isAuthenticated(to, from, next) {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        try {
            await facebookService.isAuthenticated()
            next()
        } catch (e) {
            next({path: '/', query: {redirect: to.fullPath}})
        }
    } else {
        next()
    }
}

import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Dashboard from '@/components/Dashboard'
import { AuthGuard, facebookService } from '../core'

Vue.use(Router)

let config = {
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    }
  ]
}

const router = new Router(config)

router.beforeEach(AuthGuard)
router.afterEach(() => facebookService.logPageView())

export default router

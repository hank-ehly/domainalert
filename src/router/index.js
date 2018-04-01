import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Dashboard from '@/components/Dashboard'

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
      component: Dashboard
    }
  ]
}

export default new Router(config)

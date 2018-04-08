import Vue from 'vue'
import App from './App'
import router from './router'
import './resources'

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

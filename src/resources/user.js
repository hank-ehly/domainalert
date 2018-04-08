import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const User = Vue.resource('http://localhost:8000/api/v1/users{/id}')

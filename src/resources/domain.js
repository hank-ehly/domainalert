import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const Domain = Vue.resource('http://localhost:8000/api/v1/domains{/id}')

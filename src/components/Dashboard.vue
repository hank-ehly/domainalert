<template>
  <main>
    <h1>Dashboard</h1>
    <router-link :to="{ name: 'Landing' }">Go to landing</router-link>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.email }}</li>
    </ul>

    <hr>

    <form @submit="onSubmit($event)">
      <input type="text" v-model.trim="domain" placeholder="domain">
      <p>Domain: {{ domain }}</p>
      <button type="submit" :disabled="!validateForm()">Register</button>
    </form>
  </main>
</template>

<script>
  import { User } from '../resources'

  export default {
    name: 'Dashboard',

    data() {
      return {
        domain: '',
        users: []
      }
    },

    async created() {
      try {
        const response = await User.get()
        this.users = response.data
      } catch (e) {
        console.log(e) // TODO: Display error message
      }
    },

    methods: {
      validateForm() {
        return /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/.test(this.domain)
      },

      onSubmit(e) {
        if (this.validateForm()) {
          return true
        }
        e.preventDefault()
      }
    }
  }
</script>

<style scoped>
</style>

<template>
  <main>
    <h1>Dashboard</h1>
    <router-link :to="{ name: 'Landing' }">Go to landing</router-link>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.email }}</li>
    </ul>
  </main>
</template>

<script>
  import { User } from '../resources'

  export default {
    name: 'Dashboard',

    data() {
      return {
        users: []
      }
    },

    async created() {
      try {
        const response = await User.get()
        this.users = response.data
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>

</style>

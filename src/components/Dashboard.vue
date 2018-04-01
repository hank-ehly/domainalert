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
  export default {
    name: 'Dashboard',

    data() {
      return {
        users: []
      }
    },

    async created() {
      try {
        const response = await this.$http.get('http://localhost:8000/api/v1/users')
        this.users = response.data
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>

</style>

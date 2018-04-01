<template>
  <div id="app">
    <router-view/>
    <!--<debug/>-->
  </div>
</template>

<script>
  // import Debug from './components/Debug.vue'

  export default {
    name: 'App',
    components: {
      // Debug
    }
  }
</script>

<style lang="scss">
  @import '~bootstrap/scss/bootstrap';
</style>

<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import { logger } from './core'

    export default {
        name: 'App',
        created() {
            logger.debug('[App] created')
        }
    }
</script>

<style lang="scss">
    @import '~bootstrap/scss/bootstrap';
</style>

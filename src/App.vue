<template>
    <div class="container-fluid" id="wrapper" :class="{ toggled: isToggled }">
        <div class="row">
            <navbar v-on:menu-toggle="onToggleMenu"></navbar>

            <router-view/>
        </div>
    </div>
</template>

<script>
    import { logger } from './core'
    import 'jquery/dist/jquery.min'
    import 'bootstrap/dist/js/bootstrap.bundle'
    import 'tether/dist/js/tether.min'
    import Navbar from './components/Navbar'

    export default {
        name: 'App',
        components: {Navbar},
        data() {
            return {
                isToggled: false
            }
        },
        created() {
            logger.debug('[App] created')
        },
        methods: {
            onToggleMenu() {
                this.isToggled = !this.isToggled
            }
        }
    }
</script>

<style lang="scss">
    @import '~bootstrap/scss/bootstrap';
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i');
    @import '../node_modules/font-awesome/css/font-awesome.min.css';
    @import 'assets/theme';
</style>

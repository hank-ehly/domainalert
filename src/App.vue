<template>
    <div class="container-fluid" id="wrapper" :class="{ toggled: isToggled }">
        <div class="row">
            <navbar v-on:menu-toggle="onToggleMenu"/>

            <main class="col-xs-12 col-sm-8 offset-sm-4 col-lg-9 offset-lg-3 col-xl-10 offset-xl-2 pt-3 pl-4">
                <page-header/>

                <section class="row">
                    <div class="col-sm-12">
                        <section class="row">
                            <router-view/>
                        </section>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>

<script>
    import 'jquery/dist/jquery.min'
    import 'bootstrap/dist/js/bootstrap.bundle'
    import 'tether/dist/js/tether.min'
    import Navbar from './components/Navbar'
    import PageHeader from './components/PageHeader'
    import { logger, authService } from './core'

    export default {
        name: 'App',
        components: {PageHeader, Navbar},
        data() {
            return {
                isToggled: false
            }
        },
        async created() {
            logger.debug('[App] created')
            await authService.syncUserCache()
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

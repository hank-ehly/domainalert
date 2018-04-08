<template>
    <div class="container-fluid" id="wrapper" :class="{ toggled: isToggled }">
        <div class="row">
            <nav class="sidebar col-xs-12 col-sm-4 col-lg-3 col-xl-2 bg-faded sidebar-style-1">
                <h1 class="site-title"><a href="index.html"><em class="fa fa-rocket"></em> domain.alert</a></h1>

                <a href="#menu-toggle" @click="onToggleMenu($event)" class="btn btn-default" id="menu-toggle"><em
                    class="fa fa-bars"></em></a>

                <ul class="nav nav-pills flex-column sidebar-nav">
                    <li class="nav-item"><a class="nav-link active" href="index.html"><em
                        class="fa fa-dashboard"></em>
                        Dashboard <span class="sr-only">(current)</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="widgets.html"><em class="fa fa-calendar-o"></em>
                        Widgets</a>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="charts.html"><em class="fa fa-bar-chart"></em>
                        Charts</a>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="elements.html"><em class="fa fa-hand-o-up"></em>
                        UI
                        Elements</a></li>
                    <li class="nav-item"><a class="nav-link" href="cards.html"><em class="fa fa-clone"></em>
                        Cards</a></li>
                </ul>

                <a href="#" class="logout-button"><em class="fa fa-power-off"></em> Signout</a>
            </nav>

            <router-view/>
        </div>
    </div>
</template>

<script>
    import { logger } from './core'
    import 'jquery/dist/jquery.min'
    import 'bootstrap/dist/js/bootstrap.bundle'
    import 'tether/dist/js/tether.min'

    export default {
        name: 'App',
        data() {
            return {
                isToggled: false
            }
        },
        created() {
            logger.debug('[App] created')
        },
        methods: {
            onToggleMenu(e) {
                e.preventDefault()
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

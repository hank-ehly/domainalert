<template>
    <nav class="sidebar col-xs-12 col-sm-4 col-lg-3 col-xl-2 bg-faded sidebar-style-1">
        <h1 class="site-title">
            <a href="index.html">
                <em class="fa fa-rocket"></em> domain.alert
            </a>
        </h1>

        <a href="#menu-toggle" @click.prevent="$emit('menu-toggle')" class="btn btn-default" id="menu-toggle">
            <em class="fa fa-bars"></em>
        </a>

        <ul class="nav nav-pills flex-column sidebar-nav">
            <li class="nav-item">
                <a class="nav-link active" href="index.html">
                    <em class="fa fa-dashboard"></em>Dashboard <span class="sr-only">(current)</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="widgets.html">
                    <em class="fa fa-calendar-o"></em>Widgets
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="charts.html">
                    <em class="fa fa-bar-chart"></em>Charts
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="elements.html">
                    <em class="fa fa-hand-o-up"></em>UI Elements
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="cards.html">
                    <em class="fa fa-clone"></em>Cards
                </a>
            </li>
        </ul>

        <a href="javascript:void(0)" class="logout-button" @click.prevent="onClickLogout">
            <em class="fa fa-power-off"></em> Signout
        </a>
    </nav>
</template>

<script>
    import router from '../router'
    import { facebookService } from '../core'

    export default {
        name: 'Navbar',
        methods: {
            async onClickLogout() {
                await facebookService.logout()
                router.push({path: '/'})
            }
        }
    }
</script>

<style scoped>
</style>

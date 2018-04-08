/* eslint-disable no-undef,one-var */
import Vue from 'vue'
import App from './App'
import router from './router'
import './resources'

Vue.config.productionTip = false

window.fbAsyncInit = function () {
    FB.init({
        appId: '775455055983360',
        cookie: true,
        xfbml: true,
        version: 'v2.12'
    })
    FB.AppEvents.logPageView()

    // eslint-disable-next-line no-new
    new Vue({
        el: '#app',
        router,
        components: {App},
        template: '<App/>',
        created() {
            if (process.env.NODE_ENV === 'development') {
                console.log('[main] Created App')
            }
        }
    })
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {
        return
    }
    js = d.createElement(s)
    js.id = id
    js.src = 'https://connect.facebook.net/en_US/sdk.js'
    fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))

import App from './App.vue'
import {router} from './routing.module.js'
import Vue from 'vue'


Vue.config.productionTip = false



export const vue =  new Vue({
    http: {
        root: '/'
    },
    router: router,
    render: h => h(App),
}).$mount('#app')

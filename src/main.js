import App from './App.vue'
import {router} from './routing.module.js'
import Vue from 'vue'
import VueResource from "vue-resource";

Vue.config.productionTip = false;

Vue.use(VueResource);

export const vue = new Vue({
  http: {
    root: '/'
  },
  router: router,
  render: h => h(App),
}).$mount('#app');

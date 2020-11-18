import Vue from 'vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueGoodTablePlugin from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

Vue.use(VueGoodTablePlugin);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyACwSQoJfqy-dJ5rbYmiKOdqYFu8-k8S0Y', // TODO: put in env file
    libraries: 'places'
  },
  installComponent: true
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

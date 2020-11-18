import Vue from 'vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'

Vue.config.productionTip = false

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

import Vue from 'vue'
import Home from './views/Home.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyACwSQoJfqy-dJ5rbYmiKOdqYFu8-k8S0Y' // TODO: put in env file
  }
})

new Vue({
  render: h => h(Home),
}).$mount('#app')

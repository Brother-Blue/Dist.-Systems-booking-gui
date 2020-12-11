import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Booking from './views/Booking.vue'
import Offices from './views/Offices.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/booking',
      name: 'offices',
      component: Offices
    },
    {
      path: '/booking/:id',
      name: 'booking',
      component: Booking
    }
  ]
})
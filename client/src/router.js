import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
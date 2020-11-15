<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <map ref="map"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue'
import map from './components/map.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    key: 'AIzaSyACwSQoJfqy-dJ5rbYmiKOdqYFu8-k8S0Y' // TODO: put in env file
})


export default {
  name: 'App',
  components: {
    map,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

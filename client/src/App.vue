<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Map ref="Map"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Map from './components/map.vue'

export default {
  name: 'App',
  components: {
    Map,
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

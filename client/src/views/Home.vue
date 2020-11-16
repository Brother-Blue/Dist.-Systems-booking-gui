<template>
  <div id="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div id="map-div">
        <Map ref="Map"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import Map from '../components/map.vue'

export default {
  name: 'Home',
  components: {
    Map,
    HelloWorld
  }
}
</script>

<style>
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#map-div {
    height: 50%;
}
</style>

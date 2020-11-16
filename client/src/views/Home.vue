<template>
  <div id="home">
    <div id="map-div">
        <Map ref="Map"/>
    </div>
  </div>
</template>

<script>
import Map from '../components/map.vue'

export default {
  name: 'Home',
  components: {
    Map
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

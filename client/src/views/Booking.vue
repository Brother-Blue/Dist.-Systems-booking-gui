<template>
  <div id="home">
    <div id="map-div">
        <h1> Book a time!</h1>
        <TimeBooker/>
    </div>
  </div>
</template>

<script>
import TimeBooker from '../components/TimeBooker.vue'

export default {
  name: 'Booking',
  components: {
    TimeBooker
  },
  data() {
    return {
    }
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

#available {
    font-style: italic;
}

#decription {
    margin: 2em;
}
</style>

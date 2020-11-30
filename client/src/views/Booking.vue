<template>
  <div id="home">
    <div id="table-div">
        <h1> Book a time!</h1>
        <TimeBooker
        id="table"
        :offices="offices"/>
    </div>
    <div id="form-div">
      <BookingForm
      id="form"/>
    </div>
  </div>
</template>

<script>
import TimeBooker from '../components/TimeBooker.vue'
import BookingForm from '../components/BookingForm.vue'

export default {
  name: 'Booking',
  components: {
    TimeBooker,
    BookingForm
  },
  mounted() {
     this.$mqtt.publish('dentistimo/ui/dentistoffices/get')
    this.$mqtt.subscribe('dentistimo/ui/dentistoffices')
  },
  mqtt: {
    'dentistimo/ui/dentistoffices' (data) {
      var jsonData = JSON.parse(data)
      this.offices = jsonData.offices
    }
  },
  data() {
    return {
      offices: []
    }
  }
}

</script>

<style>
#home {
  font-family: 'Libre Baskerville', serif;
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

h1 {
  padding-bottom: 1.5em;
}

#table {
  padding-left: 4em;
  padding-right: 4em;
}

</style>

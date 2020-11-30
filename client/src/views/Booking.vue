<template>
  <div id="home">
    <div id="table-div">
        <h1> Book a time!</h1>
        <TimeBooker
        id="table"
        :office="office"/>
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
    this.$mqtt.publish('root/dentistoffice', JSON.stringify({'method': 'getOne','id': `${this.$route.params.id}`}))
    this.$mqtt.subscribe('dentistimo/ui/dentistoffices')
    this.$mqtt.subscribe('dentists/dentist')
  },
  mqtt: {
    'dentistimo/ui/dentistoffices' (data) {
      var jsonData = JSON.parse(data)
      this.offices = jsonData.offices
    },
    'dentists/dentist' (data) {
      var jsonData = JSON.parse(data)
      this.office = jsonData
      console.log(jsonData)
    }
  },
  data() {
    return {
      offices: [],
      office: ''
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

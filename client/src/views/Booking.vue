<template>
  <div id="home">
    <div id="table-div">
        <h1> Book a time!</h1>
    </div>
    <div>
      <Calendar
      id="calendar"/>
    </div>
    <div id="form-div">
      <BookingForm
      id="form"/>
    </div>
  </div>
</template>

<script>
import BookingForm from '../components/BookingForm.vue'
import Calendar from '../components/Calendar.vue'

export default {
  name: 'Booking',
  components: {
    BookingForm,
    Calendar
  },
  mounted() {
    this.$mqtt.publish('dentistimo/dentistoffice', JSON.stringify({'method': 'getOne','id': `${this.$route.params.id}`}))
    this.$mqtt.subscribe('dentistimo/dentists/dentist')
  },
  mqtt: {
   'dentistimo/dentists/dentist' (data) {
      var jsonData = JSON.parse(data)
      this.office = jsonData
      this.mondayslots = this.getTimeSlots(jsonData[0].openinghours.monday)
      this.tuesdayslots = this.getTimeSlots(jsonData[0].openinghours.tuesday)
      this.wednesdayslots = this.getTimeSlots(jsonData[0].openinghours.wednesday)
      this.thursdayslots = this.getTimeSlots(jsonData[0].openinghours.thursday)
      this.fridayslots = this.getTimeSlots(jsonData[0].openinghours.friday)
    }
  },
  data() {
    return {
      offices: [],
      office: '',
      mondayslots: '',
      tuesdayslots: '',
      wednesdayslots: '',
      thursdayslots: '',
      fridayslots: ''

    }
  },
  methods: {
    getTimeSlots(dailyhours){
      var res= dailyhours.split("-"); 
      let openingHour = res[0].split(":");
      let closingHour = res[1].split(":");
      var timeslots = [];
      var i;

      var finalopeningHour = openingHour[0];
      var finalclosingHour = closingHour[0];

      for(i = parseInt(finalopeningHour); i < parseInt(finalclosingHour); i++) {
        var timeslotStart = i + ":00"
        var timeslotEnda = i + ":30"
        timeslots.push(timeslotStart + "-" + timeslotEnda)
        timeslotStart = i + ":30"
        timeslotEnda = i+1 + ":00"
        timeslots.push(timeslotStart + "-" + timeslotEnda)
      }
      console.log(timeslots)
      console.log('timeslots innan return:' + timeslots)
      return timeslots;

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

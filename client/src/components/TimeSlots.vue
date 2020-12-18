<template>
    <div>
      <div v-if="timeslotDay === 'monday'">
      <h2 class="headers">Monday</h2>
      <b-button-group class="timeslots">
      <b-row>
      <b-col cols="12" md="3" lg="2" v-for="timeslots in timeslots" v-bind:key="timeslots" align-h="center">
        <b-button class="time-button" v-on:click="bookTimeSlot(timeslots)" variant="outline-primary">{{ timeslots }}</b-button>
      </b-col>
      </b-row>
      </b-button-group>
      </div>

      <div v-if="timeslotDay === 'tuesday'">
      <h2 class="headers">Tuesday</h2>
      <b-button-group class="timeslots">
      <b-row>
      <b-col cols="12" md="3" lg="2" v-for="timeslots in timeslots" v-bind:key="timeslots" align-h="center">
        <b-button class="time-button" v-on:click="bookTimeSlot(timeslots)" variant="outline-primary">{{ timeslots }}</b-button>
      </b-col>
      </b-row>
      </b-button-group>
      </div>

      <div v-if="timeslotDay === 'wednesday'">
      <h2 class="headers">Wednesday</h2>
      <b-button-group class="timeslots">
      <b-row>
      <b-col cols="12" md="3" lg="2" v-for="timeslots in timeslots" v-bind:key="timeslots" align-h="center">
        <b-button class="time-button" v-on:click="bookTimeSlot(timeslots)" variant="outline-primary">{{ timeslots }}</b-button>
      </b-col>
      </b-row>
      </b-button-group>
      </div>

      <div v-if="timeslotDay === 'thursday'">
      <h2 class="headers">Thursday</h2>
      <b-button-group class="timeslots">
      <b-row>
      <b-col cols="12" md="3" lg="2" v-for="timeslots in timeslots" v-bind:key="timeslots" align-h="center">
        <b-button class="time-button" v-on:click="bookTimeSlot(timeslots)" variant="outline-primary">{{ timeslots }}</b-button>
      </b-col>
      </b-row>
      </b-button-group>
      </div>

    <div v-if="timeslotDay === 'friday'">
      <h2 class="headers">Friday</h2>
      <b-button-group class="timeslots">
      <b-row>
      <b-col cols="12" md="3" lg="2" v-for="timeslots in timeslots" v-bind:key="timeslots" align-h="center">
        <b-button class="time-button" v-on:click="bookTimeSlot(timeslots)" variant="outline-primary">{{ timeslots }}</b-button>
      </b-col>
      </b-row>
      </b-button-group>
    </div>

    <div class="response" v-if="this.appointmentData.success === true">
      <p>Your appointment on {{this.appointmentData.time}} has been made successfully!</p>
    </div>

    <div class="response" v-if="this.appointmentData.success === false">
      <p> Your appointment could not be made. Refresh the page and try again. </p>
    </div>

    <div id="form-div">
        <BookingForm
        id="form"
        :selectedTime="selectedTime"
        :value="value"/>
    </div>
    </div>
</template>

<script>

import BookingForm from '../components/BookingForm.vue'

export default {
  name: 'TimeSlots',
  components: {
    BookingForm
  },
  props: [
      'timeslotDay',
      'value',
      'timeslots'
  ],
  mounted() {
    this.$mqtt.subscribe('dentistimo/appointments/response')
  },
  mqtt: {
    'dentistimo/appointments/response' (data) {
      let jsonData = JSON.parse(data)
      if(jsonData != null){
        this.appointmentData = JSON.parse(data)
      }else{
        console.log("empty jsonString recieved")
        let message = "empty mqtt jsonString sent to bookingGUI via the broker. on topic: dentistimo/dentists "
        this.$mqtt.publish('dentistimo/log/error', message)
      }
    }
  },
  data() {
    return {
      timeslot: '',
      appointmentData: '',
      selectedTime: ''
    }
  },
  methods: {
    bookTimeSlot(selectedTime){
      this.selectedTime = selectedTime;
      console.log("here is the slot:" + this.selectedTime);
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
  margin-top: 1em;
}

#available {
    font-style: italic;
}

#decription {
    margin: 2em;
}
    
h1 {
  padding-bottom: 1em;
  font-size: 50px !important;
}

h2 {
  padding-top: 1em;
}

#table {
  padding-left: 4em;
  padding-right: 4em;
}

.headers {
  margin-bottom: 1em;
  margin-top: 1em;
}

.timeslots {
  background-color: #e98d58;
  padding: 2em;
}

.time-button {
  margin: 0.5em;
  color: #fff !important;
  border-color: #fff !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.10), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
}

.time-button:hover {
  background-color: #2E4057 !important;
}

.time-button-clicked {
  background-color: #2E4057 !important;
}

#form-div {
  margin-bottom: 5em;
}

.response {
  margin-top: 1.5em;
}

</style>

<template>
    <div>
      <div v-if="timeslotDay === 'monday'">
      <h2 class="headers">Monday</h2>
      <b-button-group class="timeslots">
      <b-row>
      <b-col cols="12" md="3" lg="2" v-for="mondayslot in mondayslots" v-bind:key="mondayslot" align-h="center">
        <b-button class="time-button" variant="outline-primary">{{ mondayslot }}</b-button>
      </b-col>
      </b-row>
      </b-button-group>
      </div>

      <div v-if="timeslotDay === 'tuesday'">
      <h2 class="headers">Tuesday</h2>
      <b-button-group class="timeslots">
      <b-row>
      <b-col cols="12" md="3" lg="2" v-for="tuesdayslot in tuesdayslots" v-bind:key="tuesdayslot" align-h="center">
        <b-button class="time-button" variant="outline-primary">{{ tuesdayslot }}</b-button>
      </b-col>
      </b-row>
      </b-button-group>
      </div>

      <div v-if="timeslotDay === 'wednesday'">
      <h2 class="headers">Wednesday</h2>
      <b-button-group class="timeslots">
      <b-row>
      <b-col cols="12" md="3" lg="2" v-for="wednesdayslot in wednesdayslots" v-bind:key="wednesdayslot" align-h="center">
        <b-button class="time-button" variant="outline-primary">{{ wednesdayslot }}</b-button>
      </b-col>
      </b-row>
      </b-button-group>
      </div>

      <div v-if="timeslotDay === 'thursday'">
      <h2 class="headers">Thursday</h2>
      <b-button-group class="timeslots">
      <b-row>
      <b-col cols="12" md="3" lg="2" v-for="thursdayslot in thursdayslots" v-bind:key="thursdayslot" align-h="center">
        <b-button class="time-button" variant="outline-primary">{{ thursdayslot }}</b-button>
      </b-col>
      </b-row>
      </b-button-group>
      </div>

    <div v-if="timeslotDay === 'friday'">
      <h2 class="headers">Friday</h2>
      <b-button-group class="timeslots">
      <b-row>
      <b-col cols="12" md="3" lg="2" v-for="fridayslot in fridayslots" v-bind:key="fridayslot" align-h="center">
        <b-button class="time-button" variant="outline-primary">{{ fridayslot }}</b-button>
      </b-col>
      </b-row>
      </b-button-group>
    </div>
    </div>
</template>

<script>

export default {
  name: 'TimeSlots',
  props: [
      'timeslotDay'
  ],
  mounted() {
    this.$mqtt.publish('dentistimo/dentistoffice', JSON.stringify({'method': 'getAllTimeslots'}))
    this.$mqtt.subscribe('dentistimo/dentists/offices/timeslots')
  },
  mqtt: {
   'dentistimo/dentists/offices/timeslots' (data) {
      var jsonData = JSON.parse(data)
      this.office = jsonData
      
      for(var i = 0; i < this.office.length; i++){

        if (this.office[i].id == `${this.$route.params.id}`){
          this.mondayslots = this.office[i].timeslots.monday;
          this.tuesdayslots = this.office[i].timeslots.tuesday;
          this.wednesdayslots = this.office[i].timeslots.wednesday;
          this.thursdayslots = this.office[i].timeslots.thursday;
          this.fridayslots = this.office[i].timeslots.friday;
        }  

      }
    }
  },
  data() {
    return {
      offices: [],
      office: '',
      mondayslots: [],
      tuesdayslots: [],
      wednesdayslots: [],
      thursdayslots: [],
      fridayslots: []

    }
  },
  methods: {
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

</style>


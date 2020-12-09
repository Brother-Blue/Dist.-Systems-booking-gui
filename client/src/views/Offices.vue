<template>
<b-container>
    <div id="home">
        <h2>Find an office:</h2>
    <div>
        <TimeBooker
        id="table"
        :office="office"/>
    </div>
    </div>
</b-container>
</template>

<script>
import TimeBooker from '../components/TimeBooker.vue'
export default {
    name: 'Offices',
    components: {
    TimeBooker
  },
    mounted() {
    this.$mqtt.publish('dentistimo/dentistoffice', JSON.stringify({'method': 'getAll'}))
    this.$mqtt.subscribe('dentistimo/dentists')
  },
  mqtt: {
   'dentistimo/dentists' (data) {
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
          fields: [{
                key: 'name',
                label: 'Office'
            },
            {
                key: 'openinghours.monday',
                label: 'Monday'
            },
            {
                key: 'openinghours.tuesday',
                label: 'Tuesday'
            },
            {
                key: 'openinghours.wednesday',
                label: 'Wednesday'
            },
            {
                key: 'openinghours.thursday',
                label: 'Thursday'
            },
            {
                key: 'openinghours.friday',
                label: 'Friday',
            }
          ],
        }
  } 
    
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap');

#home {
  font-family: 'Libre Baskerville', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#dentisimo {
  font-size: 50px;
}

#available {
  font-size: 25px;
}

#book {
  border-radius: 30px;
  margin-top: 2.25em;
  padding: 18px 50px;
  background-color:#e98d58;
  border: #e98d58;
  font-size: 20px;
  font-family: 'Libre Baskerville', serif;
}

#book:hover {
  color: rgb(57, 77, 41);
}

p {
  font-family: 'Libre Baskerville', serif;
}

#or {
  margin-top: 1em;
  font-size: 20px;
}

#find {
  font-size: 22px;
}

.b-container fluid {
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
}

</style>
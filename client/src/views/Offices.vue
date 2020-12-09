<template>
    <div>
        <TimeBooker
        id="table"
        :office:"office"/>
    </div>
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
          office: [],
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

</style>
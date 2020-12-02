<template>
  <div class="TimeBooker">
      <b-table bordered medium responsive striped hover
      :items="office"
      :fields="fields" id="table" align-h="center"/>
  </div>
</template>

<script>
export default {
  name: 'TimeTable',
  props: ['office'],
  data() {
      return {
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
          ]
        }
    },
    methods: {
        getTimeSlots: function (dailyHours) {
            /* Want to add time slots depending on how many
            hours there are, for each time slot, starting
            at the openinghours, there should be a time slot. */


            var res= dailyHours.split("-"); 
            var opening = res[0].split(":");
            var closing = res[1].split(":");

            opening = opening[0]+opening[1];
            closing = closing[0]+closing[1];

            var timeslots = [];
            
            for(var i = opening; i < closing; i++) {
                timeslots.push(i + ":00")
                timeslots.push(i + ":30")
            }

            return timeslots;
        }
    }
}


</script>

<style scoped>
</style>

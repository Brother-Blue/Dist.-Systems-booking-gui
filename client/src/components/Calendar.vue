<template>
  <b-row no-gutters>
    <b-col cols="12">
      <b-calendar class="calendar"
       block 
       start-weekday="1" 
       v-model="value" 
       :date-disabled-fn="dateDisabled" 
       :min="min"
       :max="max"
       locale="en-US"
       @selected="showTimeslots(value)" 
       >
       </b-calendar>
    </b-col>
    <p>{{value}}</p>
  </b-row>
</template>

<script>
  export default {
    data() {
    const date = new Date()
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    const minDate = new Date(today)
    const maxDate = new Date(today)
    minDate.setMonth(today.getMonth())
    minDate.setDate(today.getDate())
    maxDate.setMonth(today.getMonth() + 2)
    maxDate.setDate(today.getDate())

      return {
        value: '',
        day: '',
        min: minDate,
        max: maxDate,
        monday: 1,
        thuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5

      }
    },
    methods: {
      dateDisabled(ymd, date) {
        // Disable weekends (Sunday = `0`, Saturday = `6`).
        const weekday = date.getDay()
        // Return `true` if the date should be disabled
        return weekday === 0 || weekday === 6
      },
      showTimeslots(date) {
        // getDay() returns a value representaing the day of the week, sunday=0, monday=1...saturday=6
        console.log(date);
        const daySelected = new Date(date).getDay()

        //series of if statements checking what day was seleceted. this.weekday represents an int value equal to that day.
        if(daySelected === this.monday) {
          //code for the array of timeslots to be used in the calendar.
        }
        if(daySelected === this.thuesday) {
          //code for the array of timeslots to be used in the calendar.
        }
        if(daySelected === this.wednesday) {
          //code for the array of timeslots to be used in the calendar.
        }
        if(daySelected === this.thursday) {
          //code for the array of timeslots to be used in the calendar.
        }
        if(daySelected === this.friday) {
          //code for the array of timeslots to be used in the calendar.
        }else {
          //some sort of error logging.
        }
        console.log(daySelected);
      }
    }
  }
</script>

<style scoped>

</style>

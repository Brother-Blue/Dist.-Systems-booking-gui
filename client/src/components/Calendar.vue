<template>
  <b-row no-gutters>
    <b-col cols="12">
      <b-calendar class=calendar
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
        max: maxDate

      }
    },
    methods: {
      dateDisabled(ymd, date) {
        // Disable weekends (Sunday = `0`, Saturday = `6`).
        const weekday = date.getDay()
        console.log(weekday)
        // Return `true` if the date should be disabled
        return weekday === 0 || weekday === 6
      },
      showTimeslots(date) {
        this.day = date.getDay()
        console.log(this.day)
      }
    }
  }
</script>

<style scoped>

</style>

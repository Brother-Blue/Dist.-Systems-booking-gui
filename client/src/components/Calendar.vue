<template>
  <b-row no-gutters>
    <b-col cols="12">
      <b-calendar class=calendar block v-model="value" :date-disabled-fn="dateDisabled" locale="en-US"></b-calendar>
    </b-col>
    <p>{{value}}</p>
  </b-row>
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    },
    methods: {
      dateDisabled(ymd, date) {
        // Disable weekends (Sunday = `0`, Saturday = `6`).
        const weekday = date.getDay()
        // Return `true` if the date should be disabled
        return weekday === 0 || weekday === 6
      }
    }
  }
</script>

<style scoped>

</style>

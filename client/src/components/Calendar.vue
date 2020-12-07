<template>
  <b-row no-gutters>
    <b-col cols="12">
      <b-calendar class=calendar block v-model="value" locale="en-US"></b-calendar>
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
    }
  }
</script>

<style scoped>

</style>

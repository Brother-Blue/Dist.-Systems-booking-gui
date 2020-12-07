<template>
  <b-row>
    <b-col md="auto">
      <b-calendar v-model="value" locale="en-US"></b-calendar>
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
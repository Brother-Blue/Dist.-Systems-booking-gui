<template>
  <div class="TimeBooker">
      <b-table striped hover
      :items="offices"
      :fields="fields"/>
  </div>
</template>

<script>
export default {
  name: 'TimeBooker',
  props: ['offices'],
  data() {
      return {
          fields: [{
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

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

th, td {
  padding: 15px;
}

</style>

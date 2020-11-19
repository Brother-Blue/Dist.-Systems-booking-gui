<template>
  <div class="TimeBooker">
      <b-table bordered medium responsive striped hover
      :items="offices"
      :fields="fields" id="table" align-h="center"/>
  </div>
</template>

<script>
export default {
  name: 'TimeBooker',
  props: ['offices'],
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
          ],
      }
  }
}
</script>

<style scoped>
</style>

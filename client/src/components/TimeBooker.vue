<template>
<b-container>
    <div id="home">
        <div class="TimeBooker">
            <b-table bordered medium responsive striped hover
            :items="office"
            :fields="fields" id="table" align-h="center">
            </b-table>
        </div>
    </div>
</b-container>
</template>

<script>
export default {
  name: 'TimeBooker',
  props: ['office'],
  data() {
    return {
          fields: [
            {
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
    },
  methods: {
  }
}


</script>

<style scoped>

</style>

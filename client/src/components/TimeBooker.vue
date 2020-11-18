<template>
  <div class="TimeBooker">
      <div id="table">
          <table>
            <tr>
                <!-- For each day available in the json--->
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
            </tr>
            <tr>
                <!-- For each appointment available, 
                this might get tricky but I will do my best! -->
                <td> 8:00-8:30 </td>
                <td> 8:30-9:00 </td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>UNAVAILABLE</td>
            </tr>
          </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TimeBooker',
  props: ['offices'],
  methods: {
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

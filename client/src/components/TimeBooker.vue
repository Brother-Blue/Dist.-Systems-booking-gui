<template>
  <div class="TimeBooker">
      <vue-good-table
        :columns="columns"
        :rows="rows"/>
  </div>
</template>

<script>
export default {
  name: 'TimeBooker',
  props: ['offices'],
  data() {
      return {
          columns: [{
                label: 'Monday',
                field: 'monday'
            },
            {
                label: 'Tuesday',
                field: 'tuesday'
            },
            {
                label: 'Wednesday',
                field: 'wednesday'
            },
            {
                label: 'Thursday',
                field: 'thursday',
            },
            {
                label: 'Friday',
                field: 'friday'
            }
          ],
          rows: [
             { monday: "09:00-17:00", tuesday:"09:00-17:00", wednesday:"09:00-17:00", thursday:"09:00-17:00", friday:"09:00-17:00"}
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

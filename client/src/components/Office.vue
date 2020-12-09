<template>
    <b-container>
        <div>
            <p> {{office.name}} </p>
            <p> {{office.address}} </p>
            <p> Monday: {{office.openinghours.monday}} </p>
            <p> Tuesday: {{office.openinghours.tuesday}} </p>
            <p> Wednesday: {{office.openinghours.wednesday}} </p>
            <p> Thursday: {{office.openinghours.thursday}} </p>
            <p> Friday: {{office.openinghours.friday}} </p>
            <b-button id="visit-office" v-bind:href="'/booking/' + `${office.id}`">Go to the office</b-button>
        </div>
    </b-container>
</template>

<script>
export default {
    name: 'Office',
    props: ['office']
}
</script>

<style scoped>

#visit-office {
  border-radius: 30px;
  margin-top: 0.5em;
  padding: 12px 22px;
  background-color:#e98d58;
  border: #e98d58;
  font-size: 19px;
  font-family: 'Libre Baskerville', serif;
}

#visit-office:hover {
  color: rgb(57, 77, 41);
}

</style>
<template>
    <b-container>
        <div>
            <h3 id="name"> {{office.name}} </h3>
            <p id="address"> {{office.address}} </p>
            <p class="opening"> Monday: {{office.openinghours.monday}} </p>
            <p class="opening"> Tuesday: {{office.openinghours.tuesday}} </p>
            <p class="opening"> Wednesday: {{office.openinghours.wednesday}} </p>
            <p class="opening"> Thursday: {{office.openinghours.thursday}} </p>
            <p class="opening"> Friday: {{office.openinghours.friday}} </p>
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

#name {
    font-size: 28px;
    margin-bottom: 0.25em;
}

#address {
    font-size: 20px;
    margin-bottom: 1.5em;
}

.opening {
    font-size: 17px;
}

#visit-office {
  border-radius: 30px;
  margin-top: 1em;
  padding: 10px 20px;
  background-color:#e98d58;
  border: #e98d58;
  font-size: 19px;
  font-family: 'Libre Baskerville', serif;
}

#visit-office:hover {
  color: rgb(57, 77, 41);
}

</style>
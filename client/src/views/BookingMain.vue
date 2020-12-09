<template>
<b-container>
  <div id="home">
    <b-col>
      <p id="dentisimo" class="headlines"> Find an Office: </p>
    </b-col>

    <b-row align-h="center">
        <b-col cols="12" md="6" lg="4" v-for="office in offices" v-bind:key="office.id" id="office">
            <bar-item v-bind:bar="bar" v-on:del-bar="deleteBar"/>
        </b-col>
    </b-row>

  </div>
</b-container>
</template>

<script>

export default {
  name: 'BookingMain',
  components: {
  },
  mounted() {
    this.$mqtt.publish('dentistimo/dentistoffice',JSON.stringify({ 'method': 'getAll'}))
    this.$mqtt.subscribe('dentistimo/dentists')
  },
  mqtt: {
    'dentistimo/dentists' (data) {
      this.offices = JSON.parse(data)
      console.log(this.offices)
    }
  },
  data() {
    return {
      offices: [],
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap');

#home {
  font-family: 'Libre Baskerville', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#dentisimo {
  font-size: 50px;
}

#available {
  font-size: 25px;
}

#book {
  border-radius: 30px;
  margin-top: 2.25em;
  padding: 18px 50px;
  background-color:#e98d58;
  border: #e98d58;
  font-size: 20px;
  font-family: 'Libre Baskerville', serif;
}

#book:hover {
  color: rgb(57, 77, 41);
}

p {
  font-family: 'Libre Baskerville', serif;
}

#or {
  margin-top: 1em;
  font-size: 20px;
}

#find {
  font-size: 22px;
}

.b-container fluid {
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
}

</style>

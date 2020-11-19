<template>
  <div id="home">
    <div id="map-div">
        <h1> Book a time!</h1>
        <TimeBooker
        id="table"
        :offices="offices"/>
    </div>
  </div>
</template>

<script>
import TimeBooker from '../components/TimeBooker.vue'

export default {
  name: 'Booking',
  components: {
    TimeBooker
  },
  data() {
    return {
      offices: [
                {
                    id: 1,
                    name: "Your Dentist",
                    owner: "Dan Tist",
                    dentists: 1,
                    address: "Spannmålsgatan 20",
                    city: "Gothenburg",
                    coordinate: {
                        lng: 11.969388,
                        lat: 57.707619
                    },
                    openinghours: {
                        monday: "9:00-17:00",
                        tuesday: "8:00-17:00",
                        wednesday: "7:00-16:00",
                        thursday: "9:00-17:00",
                        friday: "9:00-15:00"
                    }
                },
                {
                    id: 2,
                    name: "Tooth Fairy Dentist",
                    owner: "Tooth Fairy",
                    dentists: 1,
                    address: "Slottskogen",
                    city: "Gothenburg",
                    coordinate: {
                        lng: 11.942625,
                        lat: 57.685255
                    },
                    openinghours: {
                        monday: "7:00-19:00",
                        tuesday: "7:00-19:00",
                        wednesday: "7:00-19:00",
                        thursday: "7:00-19:00",
                        friday: "7:00-19:00"
                    }
                },
                {
                    id: 3,
                    name: "The Crown",
                    owner: "Carmen Corona",
                    dentists: 1,
                    address: "Lindholmsallén 19",
                    city: "Gothenburg",
                    coordinate: {
                        lng: 11.940386,
                        lat: 57.709872
                    },
                    openinghours: {
                        monday: "6:00-15:00",
                        tuesday: "8:00-17:00",
                        wednesday: "7:00-12:00",
                        thursday: "7:00-17:00",
                        friday: "8:00-16:00"
                    },
                }
            ],
    }
  }
}

</script>

<style>
#home {
  font-family: 'Libre Baskerville', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#available {
    font-style: italic;
}

#decription {
    margin: 2em;
}

h1 {
  padding-bottom: 1.5em;
}

#table {
  padding-left: 4em;
  padding-right: 4em;
}

</style>

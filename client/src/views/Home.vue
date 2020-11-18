<template>
  <div id="home">
    <div id="map-div">
        <h1> Dentisimo</h1>
        <h4>Your <span id="available"> available </span> local dentist office</h4>
        <p id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Map ref="Map"
        :offices="offices"/>
    </div>
  </div>
</template>

<script>
import Map from '../components/map.vue'

export default {
  name: 'Home',
  components: {
    Map
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
</style>

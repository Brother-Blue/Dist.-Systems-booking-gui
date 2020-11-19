<template>
  <div id="home">
    <b-col>
      <p id="dentisimo" class="headlines"> Dentistimo</p>
      <p id="available" class="headlines">Your <span id="available"> available </span> local dentist office</p>
      <b-button id="book" v-bind:href="'/booking/'">BOOK A TIME</b-button>
      <p id="or">or</p>
      <p id="find">FIND US HERE</p>
    
      <b-row align-h="left">
        <div id="map-div">
          <Map id="map" ref="Map"
          :offices="offices"/>
        </div>
      </b-row>
    </b-col>
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
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap');

#home {
  font-family: serif;
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

.headlines {
  font-family: 'Libre Baskerville', serif;
}

#dentisimo {
  font-size: 60px;
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

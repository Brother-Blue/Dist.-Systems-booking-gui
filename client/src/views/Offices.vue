<template>
<b-container>
    <div id="home">
        <h2 id="findOffice">Find an office:</h2>

      <div>
        <b-row>
        <b-col cols="12" md="6" lg="4" v-for="office in office" v-bind:key="office.id" id="offices">
          <Office
          :office="office"
          id="office"/>
        </b-col>
        </b-row>
      </div>

    </div>
</b-container>
</template>

<script>
import Office from '../components/Office.vue'

export default {
    name: 'Offices',
    components: {
    Office: [
      {
        name = '',
        address = '',
        id = '',
        openinghours = [
          monday = '',
          tuesday = '',
          wednesday = '',
          thursday = '',
          friday = '',
        ]
      }
    ]
  },
    mounted() {
    this.$mqtt.publish('dentistimo/dentistoffice', JSON.stringify({'method': 'getAll'}))
    this.$mqtt.subscribe('dentistimo/dentists')
  },
  mqtt: {
   'dentistimo/dentists' (data) {
      var jsonData = JSON.parse(data)
      for (let i = 0; i < jsonData.length; i++) {
        try {
          this.office[i].name = jsonData[i].name
          this.office[i].address = jsonData[i].address
          this.office[i].id = jsonData[i].id
          this.office[i].openinghours.monday = jsonData[i].openinghours.monday
          this.office[i].openinghours.tuesday = jsonData[i].openinghours.tuesday
          this.office[i].openinghours.wednesday = jsonData[i].openinghours.wednesday
          this.office[i].openinghours.thursday = jsonData[i].openinghours.thursday
          this.office[i].openinghours.friday = jsonData[i].openinghours.friday

        } catch {
          let message = 'Out of bounds excpetion in bookingGUI. ill-formatted data recieved from topic: dentistimo/dentists'
          this.$mqtt.publish('dentistimo/log/error', message)
        }
    }
   }
  },
  data() {
      return {
          offices: [],
          office: '',
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

#table {
  margin-bottom: 4em;
}

#office {
  margin-bottom: 4em;
}

#findOffice {
  margin-bottom: 2em;
}

</style>
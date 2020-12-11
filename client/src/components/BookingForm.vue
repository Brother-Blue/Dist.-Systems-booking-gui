<template>
<b-container>

    <h2> Contact the Clinic: </h2>

  <div class="bookingform">
      <b-form>

      <b-row>
        <b-col>
          <p>Your selected time: </p>
        </b-col>
      </b-row>

      <b-row id="email-row" align-h="center">
      <b-col cols="2">
        <p id="email"> Email Address:</p>
      </b-col>

      <b-col cols="5">
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-col>
      </b-row>

        <b-row id="fname-row" align-h="center">
        <b-col cols="2">
        <p id="name"> Name:</p>
        </b-col>
        <b-col cols="5">
        <b-form-input
          id="input-mame"
          v-model="form.name"
          required
          placeholder="Enter Your Name"
        ></b-form-input>
        </b-col>
        </b-row>

        <b-row id="ssn-row" align-h="center">
        <b-col cols="2">
        <p id="ssn-p"> Social Security Number:</p>
        </b-col>
        <b-col cols="5">
        <b-form-input
          id="input-ssn"
          v-model="form.ssn"
          type="password"
          required
          placeholder="Enter Social Security Number"
        ></b-form-input>
        </b-col>
        </b-row>

      <!-- <b-button id="contact" type="submit" variant="primary" v-on:click="publishForm();">Submit</b-button> -->
    </b-form>
    <b-button id="contact" type="submit" variant="primary" v-on:click="publishForm();">Submit</b-button>
  </div>
</b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          ssn: ''
        }
      }
    },
    methods: {
      publishForm() {
        console.log('Vi är innan metoden')
        this.$mqtt.publish('root/appointments', JSON.stringify({'method': 'add', 'patient': '9306054412', 'dentistOffice': '1', 'date': '20200604'}))
      }
    },
    mqtt: {
      'root/appointments' (data, topic) {
        console.log(topic + ': ' + String.fromCharCode.apply(null, data))
      }
    }
}
</script>

<style scoped>

#email-row {
    padding-top: 1em;
}

#fname-row {
    padding-top: 1em;
}

#lname-row {
    padding-top: 1em;
}

#ssn-row {
    padding-top: 1em;
}

h2 {
    padding-top: 2em;
    padding-bottom: 0.5em;
}

#contact {
  border-radius: 30px;
  margin-top: 0.5em;
  padding: 10px 40px;
  background-color:#e98d58;
  border: #e98d58;
  font-size: 20px;
  font-family: 'Libre Baskerville', serif;
}

#contact:hover {
  color: rgb(57, 77, 41);
}

</style>

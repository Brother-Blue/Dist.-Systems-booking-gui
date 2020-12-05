<template>
<b-container id="bookingformcontainer">

    <h2> Contact the Clinic: </h2>

  <div class="bookingform">
      <b-form>

      <b-row id="email-row" align-h="center">
      <b-col cols="2">
        <p id="email"> Email Address:</p>
      </b-col>

      <b-col cols="5">
        <b-form-input
          id="input-1"
          v-model="form.emailaddress"
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
          id="input-2"
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
          id="input-1"
          v-model="form.ssn"
          type="ssn"
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
          emailaddress: '',
          name: '',
          ssn: ''
        }
      }
    },
    methods: {
      publishForm() {
        console.log('Vi är innan metoden')
        this.$mqtt.publish('dentistimo/appointments', JSON.stringify({'method': 'add', 'patient': 123123123, 'name': 'Linus Ivarsson', 'emailaddress': 'linusivarsson@live.se', 'dentistOffice': 1, 'date': '2020-12-07T10:00:00.000Z'}))
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

#bookingformcontainer{
  margin-bottom: 5em;
}

</style>

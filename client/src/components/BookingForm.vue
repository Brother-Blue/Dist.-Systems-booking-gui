<template>
  <b-container id="bookingformcontainer">
    <h2>Contact the Clinic:</h2>

    <div class="bookingform">
      <b-form>
        <b-row>
          <b-col>
            <p>Your selected time: {{ value }}, {{ selectedTime }}</p>
          </b-col>
        </b-row>

        <b-row id="email-row" align-h="center">
          <b-col cols="2">
            <p id="email">Email Address:</p>
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
            <p id="name">Name:</p>
          </b-col>
          <b-col cols="5">
            <b-form-input
              id="input-mame"
              v-model="form.name"
              required
              placeholder="Enter Your Name"
              :state="nameState"
              aria-describedby="input-error-name"
            ></b-form-input>

            <b-form-invalid-feedback id="input-error-name">
              Please enter your full name.
            </b-form-invalid-feedback>
          </b-col>
        </b-row>

        <b-row id="ssn-row" align-h="center">
          <b-col cols="2">
            <p id="ssn-p">Social Security Number:</p>
          </b-col>
          <b-col cols="5">
            <b-form-input
              id="input-ssn"
              v-model="form.ssn"
              type="password"
              required
              placeholder="Enter Social Security Number"
              :state="ssnState"
              aria-describedby="input-error-ssn"
            ></b-form-input>

            <b-form-invalid-feedback id="input-error-ssn">
              Please enter your ssn in the format YYYYDDMMXXXX
            </b-form-invalid-feedback>
          </b-col>
        </b-row>
      </b-form>
      <b-button
        v-if="ssnState === false || nameState === false"
        id="contact"
        type="submit"
        variant="primary"
        v-on:click="publishForm()"
        disabled
        >Submit</b-button
      >
      <b-button
        v-if="ssnState === true && nameState === true"
        id="contact"
        type="submit"
        variant="primary"
        v-on:click="publishForm()"
        >Submit</b-button
      >
    </div>
  </b-container>
</template>

<script>
import { uuid } from "vue-uuid";

export default {
  name: "BookingForm",
  props: ["selectedTime", "value"],
  data() {
    return {
      dateTime: "",
      form: {
        emailaddress: "",
        name: "",
        ssn: "",
      },
    };
  },
  computed: {
    // These methods check if the required format has been input into the fields.
    nameState() {
      return this.form.name.length > 2 ? true : false;
    },
    ssnState() {
      return this.form.ssn.length === 12 ? true : false;
    }
  },
  methods: {
    // This method will publish an appointment with the data provided in the booking form.
    publishForm() {
      this.dateTime = this.value + " " + this.selectedTime;
      let dateIssuance = new Date();
      let timeIssuance = dateIssuance.getTime();

      console.log("Date and Time is: " + this.dateTime);
      this.$mqtt.publish(
        "dentistimo/appointments",
        JSON.stringify({
          method: "add",
          userid: this.form.ssn,
          requestid: uuid.v4(),
          dentistid: `${this.$route.params.id}`,
          issuance: timeIssuance,
          time: this.dateTime,
          name: this.form.name,
          emailaddress: this.form.email,
        }),
        2
      );
      this.form.name = "";
      this.form.ssn = "";
    }
  },
};
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
  background-color: #e98d58;
  border: #e98d58;
  font-size: 20px;
  font-family: "Libre Baskerville", serif;
}

#contact:hover {
  color: rgb(57, 77, 41);
}

#bookingformcontainer {
  margin-bottom: 5em;
}
</style>

<template>
<b-container>
  <div class="bookingform">
      <b-form>
      
      <b-form-group
        id="input-group-1"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >

      <b-row id="email-row" align-h="center">
      <b-col cols="2">
        <p id="email"> Email Address:</p>
      </b-col>

      <b-col cols="5">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-col>
      </b-row>
      </b-form-group>

        <b-row id="fname-row" align-h="center">
        <b-col cols="2">
        <p id="fname"> First Name:</p>
        </b-col>
        <b-col cols="5">
        <b-form-input
          id="input-2"
          v-model="form.firstname"
          required
          placeholder="Enter First Name"
        ></b-form-input>
        </b-col>
        </b-row>

        <b-row id="lname-row" align-h="center">
        <b-col cols="2">
        <p id="lname"> Last Name:</p>
        </b-col>
        <b-col cols="5">
        <b-form-input
          id="input-3"
          v-model="form.lastname"
          required
          placeholder="Enter Last Name"
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

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          firstname: '',
          lastname: '',
          ssn: ''
        }
      }
    }
}
</script>

<style scoped>

#email {
    margin-top: 0.5em;
}

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

</style>

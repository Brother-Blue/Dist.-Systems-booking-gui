<template>
  <div id="home">
    <div id="table-div">
        <h1> Book a time!</h1>
        <h3> Insert dentist name here </h3>
    </div>

    <div>
      <Calendar
      id="calendar"
      />
    </div>

    <div id="form-div">
      <BookingForm
      id="form"/>
    </div>
  </div>
</template>

<script>
import BookingForm from '../components/BookingForm.vue'
import Calendar from '../components/Calendar.vue'

export default {
  name: 'Booking',
  components: {
    BookingForm,
    Calendar
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
  padding-bottom: 1em;
  font-size: 50px !important;
}

h2 {
  padding-top: 1em;
}

#table {
  padding-left: 4em;
  padding-right: 4em;
}

.headers {
  margin-bottom: 1em;
  margin-top: 1em;
}

.timeslots {
  background-color: #e98d58;
  padding: 2em;
}

.time-button {
  margin: 0.5em;
  color: #fff !important;
  border-color: #fff !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.10), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
}

.time-button:hover {
  background-color: #2E4057 !important;
}

.time-button-clicked {
  background-color: #2E4057 !important;
}

#form-div {
  margin-bottom: 5em;
}

</style>


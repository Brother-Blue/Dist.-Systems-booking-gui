<template>
  <b-container>
    <div id="home">
      <div id="table-div">
        <h1>Book a time at {{ office[0].name }}!</h1>
      </div>

      <div>
        <Calendar id="calendar" :office="office" />
      </div>
    </div>
  </b-container>
</template>

<script>
import Calendar from "../components/Calendar.vue";

export default {
  name: "Booking",
  components: {
    Calendar,
  },
  data() {
    return {
      office: "",
    };
  },
  mounted() {
    this.$mqtt.on("close", (err) => {
      if (err) console.log(err);
      console.log("close");
      this.$mqtt.unsubscribe("dentistimo/dentists/dentist");
    });
    this.$mqtt.on("offline", (err) => {
      if (err) console.log(err);
      console.log("offline");
      this.$mqtt.unsubscribe("dentistimo/dentists/dentist");
    });
    this.$mqtt.on("connect", (connack) => {
      if (connack.sessionPresent == false) {
        this.$mqtt.publish(
          "dentistimo/dentistoffice",
          JSON.stringify({ method: "getOne", id: `${this.$route.params.id}` }),
          1
        );
        this.$mqtt.subscribe("dentistimo/dentists/dentist");
      }
    });
  },
  mqtt: {
    "dentistimo/dentists/dentist"(data) {
      var jsonData = JSON.parse(data);
      if (jsonData != null) {
        this.office = jsonData;
      } else {
        console.log("empty jsonString recieved");
        let message =
          "empty mqtt jsonString sent to bookingGUI via the broker. on topic: dentistimo/dentists ";
        this.$mqtt.publish("dentistimo/log/error", message, 2);
      }
    },
  },
};
</script>

<style>
#home {
  font-family: "Libre Baskerville", serif;
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
}

.time-button:hover {
  background-color: #2e4057 !important;
}

.time-button-clicked {
  background-color: #2e4057 !important;
}
</style>

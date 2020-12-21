<template>
  <b-container>
    <div id="home">
      <h2 id="findOffice">Find an office:</h2>

      <div>
        <b-row>
          <b-col
            cols="12"
            md="6"
            lg="4"
            v-for="office in office"
            v-bind:key="office.id"
            id="offices"
          >
            <Office :office="office" id="office" />
          </b-col>
        </b-row>
      </div>
    </div>
  </b-container>
</template>

<script>
import Office from "../components/Office.vue";

export default {
  name: "Offices",
  components: {
    Office,
  },
  mounted() {
    this.$mqtt.on("close", (err) => {
      if (err) console.log(err);
      console.log("close");
      this.$mqtt.unsubscribe("dentistimo/dentists");
    });
    this.$mqtt.on("offline", (err) => {
      if (err) console.log(err);
      console.log("offline");
      this.$mqtt.unsubscribe("dentistimo/dentists");
    });
    this.$mqtt.on("connect", (connack) => {
      if (connack.sessionPresent == false) {
        this.$mqtt.publish(
          "dentistimo/dentistoffice",
          JSON.stringify({ method: "getAll" }),
          1
        );
        this.$mqtt.subscribe("dentistimo/dentists");
      }
    });
  },
  mqtt: {
    "dentistimo/dentists"(data) {
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
  data() {
    return {
      offices: [],
      office: [],
      fields: [
        {
          key: "name",
          label: "Office",
        },
        {
          key: "openinghours.monday",
          label: "Monday",
        },
        {
          key: "openinghours.tuesday",
          label: "Tuesday",
        },
        {
          key: "openinghours.wednesday",
          label: "Wednesday",
        },
        {
          key: "openinghours.thursday",
          label: "Thursday",
        },
        {
          key: "openinghours.friday",
          label: "Friday",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap");

#home {
  font-family: "Libre Baskerville", serif;
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
  background-color: #e98d58;
  border: #e98d58;
  font-size: 20px;
  font-family: "Libre Baskerville", serif;
}

#book:hover {
  color: rgb(57, 77, 41);
}

p {
  font-family: "Libre Baskerville", serif;
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

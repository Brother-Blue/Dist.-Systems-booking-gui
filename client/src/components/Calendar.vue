<template>
  <b-container>
    <b-row no-gutters>
      <b-col cols="12">
        <b-calendar
          class="calendar"
          block
          start-weekday="1"
          v-model="value"
          :date-disabled-fn="dateDisabled"
          :min="min"
          :max="max"
          locale="en-US"
          @selected="showTimeslots(value)"
        >
        </b-calendar>
      </b-col>
    </b-row>
    <TimeSlots
      :timeslotDay="timeslotDay"
      :value="value"
      :timeslots="timeslots"
    />
  </b-container>
</template>

<script>
import TimeSlots from "../components/TimeSlots.vue";

export default {
  name: "Calendar",
  components: {
    TimeSlots,
  },
  props: ["office"],
  data() {
    const date = new Date();
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const minDate = new Date(today);
    const maxDate = new Date(today);
    minDate.setMonth(today.getMonth());
    minDate.setDate(today.getDate());
    maxDate.setMonth(today.getMonth() + 2);
    maxDate.setDate(today.getDate());

    return {
      value: "",
      day: "",
      min: minDate,
      max: maxDate,
      monday: 1,
      tuesday: 2,
      wednesday: 3,
      thursday: 4,
      friday: 5,
      timeslotDay: "",
      timeslots: "",
    };
  },
  methods: {
    dateDisabled(ymd, date) {
      // Disable weekends (Sunday = `0`, Saturday = `6`).
      const weekday = date.getDay();
      // Return `true` if the date should be disabled
      return weekday === 0 || weekday === 6;
    },
    showTimeslots(date) {
      this.$mqtt.publish(
        "dentistimo/dentistoffice",
        JSON.stringify({
          method: "getTimeSlots",
          id: `${this.$route.params.id}`,
          date: this.value,
        }),
        1
      );
      // getDay() returns a value representaing the day of the week, sunday=0, monday=1...saturday=6

      //series of if statements checking what day was seleceted. this.weekday represents an int value equal to that day.
      const daySelected = new Date(date).getDay();

      if (daySelected === this.monday) {
        this.timeslotDay = "monday";
      }

      if (daySelected === this.tuesday) {
        this.timeslotDay = "tuesday";
      }

      if (daySelected === this.wednesday) {
        this.timeslotDay = "wednesday";
      }

      if (daySelected === this.thursday) {
        this.timeslotDay = "thursday";
      }

      if (daySelected === this.friday) {
        this.timeslotDay = "friday";
      } else {
        //some sort of error logging.
      }
    },
  },
  mounted() {
    this.$mqtt.subscribe("dentistimo/appointments/office");
    this.$mqtt.subscribe("dentistimo/dentists/offices/timeslots");
    this.$mqtt.subscribe("dentistimo/appointments/response");
  },
  mqtt: {
    "dentistimo/appointments/office"(data) {
      let jsonData = JSON.parse(data);
      if (jsonData != null) {
        this.appointments = jsonData;
      } else {
        console.log("empty jsonString recieved");
        let message =
          "empty mqtt jsonString sent to bookingGUI via the broker. on topic: dentistimo/dentists ";
        this.$mqtt.publish("dentistimo/log/error", message, 2);
      }
    },
    "dentistimo/dentists/offices/timeslots"(data) {
      let jsonData = JSON.parse(data).timeSlots;
      if (jsonData != null) {
        this.timeslots = jsonData;
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

<style scoped></style>

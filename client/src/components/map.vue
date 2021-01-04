<template>
  <div>
    
    <!-- Google map calender -->
    <div id="calendar_over_map">
      <b-calendar
        class="calendar"
        start-weekday="1"
        v-model="value"
        :date-disabled-fn="dateDisabled"
        :min="min"
        :max="max"
        locale="en-US"
        @selected="showTimeslots(value)"
      />
    </div>

    <!-- Google map layout -->
    <GmapMap
      ref="mapRef"
      :center="centerLocation"
      style="height:52%; width:100%; position:fixed; bottom: 0; z-index: -1"
      :zoom="zoom"
      :options="{
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        rorationControl: false,
        minZoom: 5,
        styles: mapStyles,
      }"
    >
      <!-- low Dentist marker -->
      <GmapMarker
        v-for="(r, index) in lowOffices"
        :key="index + 'l'"
        :position="{
          lat: r.coordinate.latitude,
          lng: r.coordinate.longitude,
        }"
        :clickable="true"
        :draggable="false"
        @click="toggleInfoWindow(r, index)"
        :icon="lowStyles"
      />

      <!-- med Dentist marker -->
      <GmapMarker
        v-for="(r, index) in medOffices"
        :key="index + 'm'"
        :position="{
          lat: r.coordinate.latitude,
          lng: r.coordinate.longitude,
        }"
        :clickable="true"
        :draggable="false"
        @click="toggleInfoWindow(r, index)"
        :icon="medStyles"
      />

      <!-- high Dentist marker -->
      <GmapMarker
        v-for="(r, index) in highOffices"
        :key="index + 'h'"
        :position="{
          lat: r.coordinate.latitude,
          lng: r.coordinate.longitude,
        }"
        :clickable="true"
        :draggable="false"
        @click="toggleInfoWindow(r, index)"
        :icon="highStyles"
      />

      <!-- Dentist info window -->
      <GmapInfoWindow
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen = false"
      >
      </GmapInfoWindow>
    </GmapMap>
  </div>
</template>

<script>
export default {
  props: ["offices"],
  data() {
    const low = require("../assets/dentist-icon-low.png");
    const medium = require("../assets/dentist-icon-med.png");
    const high = require("../assets/dentist-icon-high.png");
    const date = new Date();
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const minDate = new Date(today);
    const maxDate = new Date(today);
    minDate.setMonth(today.getMonth());
    minDate.setDate(today.getDate());
    maxDate.setMonth(today.getMonth() + 2);
    maxDate.setDate(today.getDate());

    return {
      zoom: 12,
      centerLocation: {
        lat: 57.70887,
        lng: 11.97456,
      },
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        content: "",
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
      lowStyles: {
        url: low,
        scaledSize: {
          width: 50,
          height: 50,
          f: "px",
          b: "px",
        },
      },
      medStyles: {
        url: medium,
        scaledSize: {
          width: 50,
          height: 50,
          f: "px",
          b: "px",
        },
      },
      highStyles: {
        url: high,
        scaledSize: {
          width: 50,
          height: 50,
          f: "px",
          b: "px",
        },
      },
      mapStyles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#ebe3cd",
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#523735",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#f5f1e6",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#c9b2a6",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#dcd2be",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#ae9e90",
            },
          ],
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#93817c",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#a5b076",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#447530",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f1e6",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#fdfcf8",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#f8c967",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#e9bc62",
            },
          ],
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry",
          stylers: [
            {
              color: "#e98d58",
            },
          ],
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#db8555",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#806b63",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#8f7d77",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#ebe3cd",
            },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#dfd2ae",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#b9d3c2",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#92998d",
            },
          ],
        },
      ],
      value: new Date().toISOString().slice(0, 10),
      day: "",
      min: minDate,
      max: maxDate,
      timeslotDay: "",
      office: 0,
      lowOffices: [],
      medOffices: [],
      highOffices: [],
    };
  },
  methods: {
    // Show info window based on which office icon pressed
    toggleInfoWindow: function(offices, idx) {
      this.infoWindowPos = {
        lat: offices.coordinate.latitude,
        lng: offices.coordinate.longitude,
      };

      this.infoOptions.content = this.getInfoWindowContent(offices);

      // If same office is clicked, close window. Else open
      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    getInfoWindowContent: function(offices) {
        // Return style code for clicked office icon
      return `
                    <div>
                        <a href="booking/${offices.id}"><h3 style="font-size: 22px;color:black; margin-top: 0.5em; font-family: 'Libre Baskerville', serif;">${offices.name}</h3></a>
                        <p style="font-size:18px;">${offices.address}</p>
                        <p style="font-size:14px;margin:4px;">Monday: ${offices.openinghours.monday}</p>
                        <p style="font-size:14px;;margin:4px;">Tuesday: ${offices.openinghours.tuesday}</p>
                        <p style="font-size:14px;;margin:4px;">Wednesday: ${offices.openinghours.wednesday}</p>
                        <p style="font-size:14px;;margin:4px;">Thursday: ${offices.openinghours.thursday}</p>
                        <p style="font-size:14px;;margin:4px;">Friday: ${offices.openinghours.friday}</p><br>
                        <u><p style="font-size:14px;;margin:0px;">${offices.availibilty} available times</p></u>
                        <form action="booking/${offices.id}">
                            <button style="margin: 0.75em; font-size: 18px; font-family: 'Libre Baskerville', serif; background-color:#66A182; padding: 4px; color: white; border-radius: 20px; padding-left: 10px; padding-right: 10px;
                            ">Book a time!</button>
                        </form>
                    </div>`;
    },
    dateDisabled(ymd, date) {
      // Disable weekends (Sunday = `0`, Saturday = `6`).
      const weekday = date.getDay();
      // Return `true` if the date should be disabled
      return weekday === 0 || weekday === 6;
    },
    showTimeslots() {
      this.infoWinOpen = false;
      this.office = 0;
      // Collect timeslots for all offices
      for (let i = 0; i < this.offices.length; i++) {
        this.offices[i].availibilty = 0;
        this.$mqtt.publish(
          "dentistimo/dentistoffice",
          JSON.stringify({
            method: "getTimeSlots",
            id: this.offices[i].id,
            date: this.value,
          }),
          1
        );
      }
    },
    parseOffices(office) {
      // Parse offices depending on amount of availabile times
      if (office.availibilty <= 0) this.lowOffices.push(office);
      else if (office.availibilty <= 5) this.medOffices.push(office);
      else this.highOffices.push(office);
    },
  },
  mounted() {
    this.$mqtt.subscribe("dentistimo/dentists/offices/timeslots");
    this.$mqtt.subscribe("dentistimo/appointments/response");
    setTimeout(() => {
      this.showTimeslots();
    }, 500);
  },
  mqtt: {
    "dentistimo/appointments/office"(data) {
      this.appointments = JSON.parse(data);
    },
    "dentistimo/dentists/offices/timeslots"(data) {
      // Catch and store timeslots for dentistoffice
      this.offices[this.office].availibilty = JSON.parse(data).length;
      this.parseOffices(this.offices[this.office]);
      this.office++;
    },
    "dentistimo/appointments/response"(data) {
      this.response = JSON.parse(data);
      console.log(this.response.success);
      if (this.response.success == true) {
        this.$mqtt.publish(
          "dentistimo/appointments",
          JSON.stringify({
            method: "getOffice",
            dentistid: `${this.$route.params.id}`,
          }),
          1
        );
      }
    },
  },
};
</script>

<style scoped>
#calendar_over_map {
  position: fixed;
  bottom: 25px;
  left: 15px;
  z-index: 99;
  background-color: white;
}
</style>

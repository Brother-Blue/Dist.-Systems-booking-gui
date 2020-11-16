<template>
<div>
    <!-- Google map layout -->
    <GmapMap
    ref="mapRef"
    :center="centerLocation"
    style="height:50%; width:100%; position:fixed; bottom: 0;"
    :zoom="zoom"
    :options="{
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        rorationControl: false,
        minZoom: 5,
        styles: mapStyles}">

        <!-- Dentist marker -->
        <GmapMarker
        v-for="(r, index) in offices"
        :key="index"
        :position="{
        lat: r.coordinate.latitude,
        lng: r.coordinate.longitude}"
        :clickable="true"
        :draggable="false"
        @click="toggleInfoWindow(r,index)"
        :icon="dentistStyles"/>

        <!-- Dentist info window -->
        <GmapInfoWindow
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen = false">
        </GmapInfoWindow>

    </GmapMap>
</div>
</template>

<script>
export default {
    data() {
        return {
            zoom: 12,
            centerLocation: {
                lat: 57.708870,         
                lng: 11.974560
            },
            infoWindowPos: null,
            infoWinOpen: false,
            currentMidx: null,
            infoOptions: {
                content: '',
                pixelOffset: {
                    width: 0,
                    height: -35
                }
            },
            dentistStyles: {
                url: require('../assets/dental-location.svg'),
                scaledSize: {
                    width: 500,
                    height: 500,
                    f: 'px',
                    b: 'px'
                }
            },
            offices: [
                {
                    id: 1,
                    name: "Your Dentist",
                    owner: "Dan Tist",
                    dentists: 1,
                    address: "Spannmålsgatan 20",
                    city: "Gothenburg",
                    coordinate: {
                        latitude: 11.969388,
                        longitude: 57.707619
                    },
                    openinghours: {
                        monday: "9:00-17:00",
                        tuesday: "8:00-17:00",
                        wednesday: "7:00-16:00",
                        thursday: "9:00-17:00",
                        friday: "9:00-15:00"
                    }
                },
                {
                    id: 2,
                    name: "Tooth Fairy Dentist",
                    owner: "Tooth Fairy",
                    dentists: 1,
                    address: "Slottskogen",
                    city: "Gothenburg",
                    coordinate: {
                        latitude: 11.942625,
                        longitude: 57.685255
                    },
                    openinghours: {
                        monday: "7:00-19:00",
                        tuesday: "7:00-19:00",
                        wednesday: "7:00-19:00",
                        thursday: "7:00-19:00",
                        friday: "7:00-19:00"
                    }
                },
                {
                    id: 3,
                    name: "The Crown",
                    owner: "Carmen Corona",
                    dentists: 1,
                    address: "Lindholmsallén 19",
                    city: "Gothenburg",
                    coordinate: {
                        latitude: 11.940386,
                        longitude: 57.709872
                    },
                    openinghours: {
                        monday: "6:00-15:00",
                        tuesday: "8:00-17:00",
                        wednesday: "7:00-12:00",
                        thursday: "7:00-17:00",
                        friday: "8:00-16:00"
                    },
                }
            ],
            mapStyles: [
                {
                    elementType: 'geometry',
                    stylers: [
                        {
                            color: '#242f3e'
                        }
                    ]
                },
                {   
                    elementType: 'labels',
                    stylers: [
                        {
                            visibility: 'off'
                        }
                    ]
                },
            {
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#746855'
                    }
                ]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#242f3e'
                    }
                ]
            },
            {
                featureType: 'administrative.country',
                stylers: [
                    {
                        visibility: 'on'
                    }
                ]
            },
            {
                featureType: 'administrative.land_parcel',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            },
            {
                featureType: 'administrative.locality',
                stylers: [
                    {
                        visibility: 'on'
                    }
                ]
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#d59563'
                    }
                ]
            },
            {
                featureType: 'administrative.neighborhood',
                stylers: [
                    {
                        visibility: 'on'
                    }
                ]
            },
            {
                featureType: 'administrative.province',
                stylers: [
                    {
                        visibility: 'on'
                    }
                ]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#d59563'
                    }
                ]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#263c3f'
                    }
                ]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#6b9a76'
                    }
                ]
            },
            {
                featureType: 'road',
                stylers: [
                    {
                        visibility: 'on'
                    }
                ]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#38414e'
                    }
                ]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#212a37'
                }
            ]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#9ca5b3'
                }
            ]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#746855'
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [
                    {
                        color: '#1f2835'
                    }
                ]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#f3d19c'
                    }
                ]
            },
            {
                featureType: 'transit',
                stylers: [
                    {
                        visibility: 'on'
                    }
                ]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#2f3948'
                    }
                ]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#d59563'
                    }
                ]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#17263c'
                    }
                ]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#515c6d'
                    }
                ]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#17263c'
                    }
                ]
            }
        ]
        }
    },
    methods: {
            // Show info window based on which bar pressed
    toggleInfoWindow: function (offices, idx) {
      this.infoWindowPos = {
        lat: offices.coordinate.latitude,
        lng: offices.coordinate.longitude
      }
      this.infoOptions.content = this.getInfoWindowContent(offices)

      // If same bar is clicked, close window. Else open
      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen
      } else {
        this.infoWinOpen = true
        this.currentMidx = idx
      }
    },
    getInfoWindowContent: function (offices) {
      return (`  <div>
  <div>
    <p></p>
    <h6><b>${offices.name}</b></h6>
    <p>${offices.address}</p>
  </div>
</div>`)
    }
    }
}
</script>

<style scoped>
</style>
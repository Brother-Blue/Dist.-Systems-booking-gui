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
        :position="r.coordinate"
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
    props: ['offices'],
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
                    width: 50,
                    height: 50,
                    f: 'px',
                    b: 'px'
                }
            },
            mapStyles: [
                {
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#ebe3cd"
                        }
                    ]
                },
                {
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#523735"
                        }
                    ]
                },
                {
                    elementType: "labels.text.stroke",
                    stylers: [
                        {
                            color: "#f5f1e6"
                        }
                    ]
                },
                {
                    featureType: "administrative",
                    elementType: "geometry.stroke",
                    stylers: [
                        {
                            color: "#c9b2a6"
                        }
                    ]
                },
                {
                    featureType: "administrative.land_parcel",
                    elementType: "geometry.stroke",
                    stylers: [
                        {
                            color: "#dcd2be"
                        }
                    ]
                },
                {
                    featureType: "administrative.land_parcel",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#ae9e90"
                        }
                    ]
                },
                {
                    featureType: "landscape.natural",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#dfd2ae"
                        }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#dfd2ae"
                        }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [
                        {
                            visibility: "off"
                        }
                    ]
                },
                {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#93817c"
                        }
                    ]
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#a5b076"
                        }
                    ]
                },
                {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#447530"
                        }
                    ]
                },
                {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#f5f1e6"
                        }
                    ]
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#fdfcf8"
                        }
                    ]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#f8c967"
                        }
                    ]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [
                        {
                            color: "#e9bc62"
                        }
                    ]
                },
                {
                    featureType: "road.highway.controlled_access",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#e98d58"
                        }
                    ]
                },
                {
                    featureType: "road.highway.controlled_access",
                    elementType: "geometry.stroke",
                    stylers: [
                        {
                            color: "#db8555"
                        }
                    ]
                },
                {
                    featureType: "road.local",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#806b63"
                        }
                    ]
                },
                {
                    featureType: "transit.line",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#dfd2ae"
                        }
                    ]
                },
                {
                    featureType: "transit.line",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#8f7d77"
                        }
                    ]
                },
                {
                    featureType: "transit.line",
                    elementType: "labels.text.stroke",
                    stylers: [
                        {
                            color: "#ebe3cd"
                        }
                    ]
                },
                {
                    featureType: "transit.station",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#dfd2ae"
                        }
                    ]
                },
                {
                    featureType: "water",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#b9d3c2"
                        }
                    ]
                },
                {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#92998d"
                        }
                    ]
                }
            ]
        }
    },
    methods: {
            // Show info window based on which office pressed
            toggleInfoWindow: function (offices, idx) {
                this.infoWindowPos = offices.coordinate

                this.infoOptions.content = this.getInfoWindowContent(offices)

                // If same office is clicked, close window. Else open
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
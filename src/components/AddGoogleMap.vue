<template>
  <div>
    <gmap-map
        :zoom="12"    
        :center="center"
        style="width:100%;  height: 95vh"
      >
      <gmap-marker
        :key="index"
        v-for="(m, index) in locationMarkersTest"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>


      
    </gmap-map>
  </div>

  </div>
</template>

<script>
import axios from "axios";
import { MapElementFactory } from "vue2-google-maps";
export default {
  name: "AddGoogleMap",
  data() {
    return {
      center: {
        lat: 1.37746,
        lng: 103.8286,
      },
      locationMarkersTest: [
        {
          position: { lat: 1.37746, lng: 103.8286 },
        },
        {
          position: { lat: 1.376516, lng: 103.830228 },
        },
        {
          position: { lat: 1.374946, lng: 103.829760 },
        },
        {
          position: { lat: 1.374410, lng: 103.830511 },
        },
        {
          position: { lat: 1.372442, lng: 103.831595 },
        },
        {
          position: { lat: 1.350603, lng: 103.848027 },
        },
        {
          position: { lat: 1.364990, lng: 103.850027 },
        },
        {
          position: { lat: 1.363188, lng: 103.851142 },
        },
        {
          position: { lat: 1.363875, lng: 103.849255 },
        },
      ],
      locPlaces: [],
      existingPlace: null,

      customerIdArray:[],
      locationMarkers:[]
    };
  },
  async mounted() {
    this.locateGeoLocation();

    if(this.$store.state.completed == true){
      this.locationMarkersTest = [
        
        {
          position: { lat: 1.376516, lng: 103.830228 },
        },
        {
          position: { lat: 1.374946, lng: 103.829760 },
        },
        {
          position: { lat: 1.374410, lng: 103.830511 },
        },
        {
          position: { lat: 1.372442, lng: 103.831595 },
        },
        {
          position: { lat: 1.350603, lng: 103.848027 },
        },
        {
          position: { lat: 1.364990, lng: 103.850027 },
        },
        {
          position: { lat: 1.363188, lng: 103.851142 },
        },
        {
          position: { lat: 1.363875, lng: 103.849255 },
        },
      ]
    }


    // console.log(this.$store.state.parcels)
    // this.$store.state.parcels.forEach(element => {
    //   if (element.Status == 'toDeliver'){
    //     this.customerIdArray.push(element.CustomerID)
    //   }
      
    // });
    // console.log(this.customerIdArray)

    // let deliveryAddresses = await axios.post(`http://${this.$store.state.globalHost}:8000/getDeliveryAddresses`,
    //       this.customerIdArray
    //     )

    //   console.log(deliveryAddresses)
    //   this.$store.state.deliveryAddresses = deliveryAddresses.data.data
      



    //   this.$store.state.deliveryAddresses.forEach(element => {
    //     this.locationMarkers.push({position:element.position})
        
    //   });

    //   console.log(this.locationMarkers)
  },
  methods: {
    initMarker(loc) {
      this.existingPlace = loc;
    },
    addLocationMarker() {
      if (this.existingPlace) {
        const marker = {
          lat: this.existingPlace.geometry.location.lat(),
          lng: this.existingPlace.geometry.location.lng(),
        };
        this.locationMarkers.push({ position: marker });
        this.locPlaces.push(this.existingPlace);
        this.center = marker;
        this.existingPlace = null;
      }
    },
    locateGeoLocation: function () {
      navigator.geolocation.getCurrentPosition((res) => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        };
      });
    },
  },
};
</script>
<template>
  <div>
    <!-- <div>
      
      <label>
        <gmap-autocomplete @place_changed="initMarker" style="border"></gmap-autocomplete>
        <q-btn @click="addLocationMarker">Add</q-btn>

        


      </label>
     
    </div> -->
    
    <gmap-map :zoom="14" :center="center" style="width: 100%; height: 95vh">
    
      <!-- <gmap-marker
        :key="index"
        v-for="(m, index) in locationMarkers"
        :position="m.position"
        @click="center = m.position"
      ></gmap-marker> -->

      <!-- <gmap-marker
        :key="index"
        v-for="(gmp, index) in locations"
        :position="gmp"
        @click="center=gmp"
      >
      </gmap-marker> -->

      <gmap-marker
        :key="index"
        v-for="(gmp, index) in posts['nearest-carpark']['nearest_carpark_coords']"
        :position="{ lat: gmp[0], lng: gmp[1], label: index }"
        @click="openWindow(gmp[0], gmp[1], index)"
        :icon="'http://www.sjjb.co.uk/mapicons/png/transport_parking.n.32.png'"
        :clickable="true"
      >
      </gmap-marker>

      <gmap-info-window 
            @closeclick="window_open=false" 
            :opened="window_open" 
            :position="infowindow"
        >
            <p>Name of Carpark: {{this.text[index][0]}}</p>
            <p>Type of carpark: {{this.text[index][1]}}</p>
            <p>Minimum Clearance: {{this.text[index][2]}}</p>


      </gmap-info-window>   

      <gmap-marker
        :key="index"
        v-for="(gmp, index) in posts['order-coordinates']"
        :position="{ lat: gmp[0], lng: gmp[1], label: index }"
        @click="center = gmp"
        :icon="'http://www.sjjb.co.uk/mapicons/png/amenity_post_office.p.24.png'"
      >
      </gmap-marker>

      <!-- <gmap-marker
        :key="index"
        v-for="(gmp, index) in posts[1]"
        :position="{'lat':gmp[0], 'lng':gmp[1]}"
        @click="center=gmp"
      >
      </gmap-marker>
      <gmap-marker
        :key="index"
        v-for="(gmp, index) in posts[-1]"
        :position="{'lat':gmp[0], 'lng':gmp[1]}"
        @click="center=gmp"
      >
      </gmap-marker> -->
    </gmap-map>

    <!-- {{posts['order-coordinates']}} -->
  </div>
</template>

<script>
import axios from "axios";
import {MapElementFactory} from 'vue2-google-maps'
export default {
  name: "AddGoogleMap",
  data() {
    return {
      center: {
        lat: 39.7837304,
        lng: -100.4458825,
      },
      locationMarkers: [],
      locPlaces: [],
      locations: [],
      existingPlace: null,
      posts: [],
      errors: [],
      info_marker: null,
      infowindow: {lat: null, lng: null},
      window_open: false,
      text: [],
      index: 0,
    };
  },
  mounted() {
    this.setLocationLatLng();
    this.locateGeoLocation();
  },
  created() {
    axios
      .get("https://kaizen-carpark-tqscm3szjq-as.a.run.app/best-carpark?route_id=1509160")
      .then((response) => {
        // JSON responses are automatically parsed.
        this.posts = response.data;
        //console.log(this.posts['nearest-carpark']['nearest_carpark_info']);
        this.text = this.posts['nearest-carpark']['nearest_carpark_info']
        console.log(this.text)
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    openWindow (lat , lng, ind) {
            this.infowindow = {lat, lng}
            this.window_open = true
            this.index = ind
    },
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
    setLocationLatLng: function () {
      navigator.geolocation.getCurrentPosition((geolocation) => {
        this.center = {
          lat: geolocation.coords.latitude,
          lng: geolocation.coords.longitude,
        };
      });
    },
  },
};
</script>
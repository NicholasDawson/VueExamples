<script setup>
import { ref, onMounted, KeepAlive } from 'vue'
import { RouterView } from 'vue-router'
import axios from 'axios';
import Navigation from './components/Navigation.vue'
import GeolocationError from './components/GeolocationError.vue';


const latitude = ref(null);
const longitude = ref(null);
const city = ref(null);
const state = ref(null);
const geolocationErrorCode = ref(null);


function reverseGeocoding() {
  const code = 'wWKOuHyqHm4/ozea94if3J/7ANBuncYjVsgqgtVAWFZ7BBXwPp9/8Q=='
  let url = `${import.meta.env.VITE_API}/api/ReverseGeocodingAPI?lat=${latitude.value}&lon=${longitude.value}&code=${code}`;
    axios.get(url).then(res => {
      let properties = res.data.features[0].properties;
      city.value = properties.city;
      state.value = properties.state_code;
    })
}

// Get geolocation from browser at load
onMounted(() => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      latitude.value = pos.coords.latitude;
      longitude.value = pos.coords.longitude;
      geolocationErrorCode.value = 0; // 0 denotes no error
      reverseGeocoding()
    },
    (error) => {
      geolocationErrorCode.value = error.code;
    }
  )
})

</script>

<template>
  <header>
    <Navigation />
  </header>
  <main class="mx-3 mt-3">
    <GeolocationError :error="geolocationErrorCode" />

    <RouterView v-slot="{ Component }"
      :latitude="latitude"
      :longitude="longitude"
      :geolocationErrorCode="geolocationErrorCode"
      :city="city"
      :state="state"
    >
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </main>
</template>

<style>
footer {
    position: relative;
    bottom: 0;
}
</style>
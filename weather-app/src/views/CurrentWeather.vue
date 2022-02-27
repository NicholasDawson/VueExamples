<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import WeatherIcon from '../components/WeatherIcon.vue';

const props = defineProps({
  latitude: Number,
  longitude: Number,
  geolocationErrorCode: Number,
  city: String,
  state: String
})

const weather = ref(null);

function getWeather() {
  if (weather.value == null && props.geolocationErrorCode == 0) {
    const code = 'Pes6e8/SnZ/7WRwBHdrtc0F0Dz6Lefc9VZZK51vhHx1tuUKH7gjbaQ==';
    let url = `${import.meta.env.VITE_API}/api/CurrentWeatherAPI?lat=${props.latitude}&lon=${props.longitude}&code=${code}`;
    axios.get(url).then(res => {
      weather.value = res.data;
    })
  }
}

watch(props, () => {
  getWeather()
})

onMounted(() => {
  getWeather()
})

</script>

<template>
  <h1 v-if="props.city" class="text-center">Current Weather in {{ city }}<span v-if="props.state">, {{ state }}</span></h1>

  <div v-if="weather" class="container d-flex flex-md-row justify-content-center">

    <div class="row justify-content-center">
      <WeatherIcon :weather="weather.weather[0]" class="col-4" />
      <div class="col-sm d-flex justify-content-end flex-column text-center text-sm-start">
        <h1 class="display-1">
          {{ weather.main.temp.toFixed() }}°F
          <span class="text-muted h4">feels like {{ weather.main.feels_like.toFixed() }}°F</span>
        </h1>

        <h4>Wind Speed: <b>{{ weather.wind.speed.toFixed() }} mph</b></h4>
        <h4>Humidity: <b>{{ weather.main.humidity}}%</b></h4>
    </div>
    </div>
  </div>

  <div v-else class="d-flex justify-content-center">
    <div class="spinner-border m-5" style="width: 10rem; height: 10rem" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<style>

</style>

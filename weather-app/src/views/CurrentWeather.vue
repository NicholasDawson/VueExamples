<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard.vue';

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
    let url = `https://nick-weather.azurewebsites.net/api/CurrentWeatherAPI?lat=${props.latitude}&lon=${props.longitude}&code=${code}`;
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
  
  <h1>Current Weather</h1>
  <hr>
  
  <div v-if="weather">
    <h3>{{ city }}, {{ state }}</h3>
    <WeatherCard :weather="weather.weather[0]" />
    
    <h1>{{ weather.main.temp }} °F
      <span style="font-size: 0.5em">(feels like {{ weather.main.feels_like }} °F)</span>
    </h1>
    
    <h4>Wind Speed: {{ weather.wind.speed }} mph</h4>
  </div>
  
  <div v-else class="spinner-border" style="width: 3em; height: 3em" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

</template>

<style>
  hr {
    width: 50%;
  }
</style>

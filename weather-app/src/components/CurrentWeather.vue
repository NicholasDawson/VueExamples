<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

function _0x11f5(_0x1626ea,_0x1bf3ab){const _0x45c435=_0x45c4();return _0x11f5=function(_0x11f53d,_0x3a345e){_0x11f53d=_0x11f53d-0xa1;let _0x17b783=_0x45c435[_0x11f53d];return _0x17b783;},_0x11f5(_0x1626ea,_0x1bf3ab);}const _0x46e456=_0x11f5;(function(_0x2eea41,_0x5691d7){const _0x1200f0=_0x11f5,_0x3c0f30=_0x2eea41();while(!![]){try{const _0x15a2ab=parseInt(_0x1200f0(0xa3))/0x1+parseInt(_0x1200f0(0xaa))/0x2+parseInt(_0x1200f0(0xa2))/0x3+-parseInt(_0x1200f0(0xa7))/0x4*(parseInt(_0x1200f0(0xa8))/0x5)+parseInt(_0x1200f0(0xa5))/0x6*(parseInt(_0x1200f0(0xa1))/0x7)+parseInt(_0x1200f0(0xa6))/0x8+-parseInt(_0x1200f0(0xa4))/0x9;if(_0x15a2ab===_0x5691d7)break;else _0x3c0f30['push'](_0x3c0f30['shift']());}catch(_0x2e6359){_0x3c0f30['push'](_0x3c0f30['shift']());}}}(_0x45c4,0x2fae9));const apiKey=_0x46e456(0xa9);function _0x45c4(){const _0x1559e6=['16904BEzXUn','240JBbmMX','Pes6e8/SnZ/7WRwBHdrtc0F0Dz6Lefc9VZZK51vhHx1tuUKH7gjbaQ==','603088Jaafbs','49cDECYe','864249wlayAI','386003fvmgSR','7610463lDGZlf','156552yfWtCs','683888fMWCbM'];_0x45c4=function(){return _0x1559e6;};return _0x45c4();}

const latitude = ref(null);
const longitude = ref(null);
const weather = ref(null);

function getIcon() {
  return `./${weather.value.weather[0].icon}.png` 
}

function getWeather() {
  let url = `https://nick-weather.azurewebsites.net/api/CurrentWeatherAPI?lat=${latitude.value}&lon=${longitude.value}&code=${apiKey}`;
  axios.get(url).then(res => {
    weather.value = res.data;
  })
}

onMounted(() => {
  navigator.geolocation.getCurrentPosition((pos) => {
    latitude.value = pos.coords.latitude;
    longitude.value = pos.coords.longitude;
    getWeather()
  })
})
</script>

<template>
  <h1>Weather App</h1>
  <div v-if="weather">
    <img :src="getIcon()" width="200" />
    <h2>{{ weather.weather[0].main }}</h2>
    <h1>{{ weather.main.temp }} °F</h1>
    <h4>Feels like {{ weather.main.feels_like }} °F</h4>
  </div>
  <div v-else class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  
</template>

<style>

</style>

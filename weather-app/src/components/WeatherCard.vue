<script setup>
const props = defineProps({
    weather: Object
})

function getIcon() {
  return `./weather-icons/${props.weather.icon}.png` 
}
</script>

<template>
    <div class="card pb-2 mb-3" style="width: 200px">
      <img :src="getIcon()" class="card-img-top p-2" />
      <h2 class="card-title text-center">{{ weather.main }}</h2>
    </div>
</template>

<style>
.card {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
</style>
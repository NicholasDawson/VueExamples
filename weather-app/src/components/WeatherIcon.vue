<script setup>
const props = defineProps({
    weather: Object
})

function getIcon() {
  return `weather-icons/${props.weather.icon}.png`
}
</script>

<template>
    <div style="width: 200px">
      <img :src="getIcon()" class="card-img-top p-2" />
      <h2 class="card-title text-center">{{ weather.main }}</h2>
    </div>
</template>

<style>

</style>
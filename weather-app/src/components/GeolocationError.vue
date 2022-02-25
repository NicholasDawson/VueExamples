<script setup>
const props = defineProps({
  error: Number
})

</script>

<template>
    <div v-if="error == 1" class="alert alert-danger">
        <b>Permission Denied:</b> You must allow location access to see the weather.
    </div>
    <div v-else-if="error == 2" class="alert alert-warning">
        <b>Position Unavailable:</b> Location unable to be determined.
    </div>
    <div v-else-if="error == 3" class="alert alert-warning">
        <b>Timeout:</b> Location unable to be determined.
    </div>
</template>
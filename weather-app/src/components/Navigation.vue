<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/favicon.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
                Weather
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/">Current</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/hourly">Hourly</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/weekly">Weekly</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/air-pollution">Air Pollution</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>

</style>
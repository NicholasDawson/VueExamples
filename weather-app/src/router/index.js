import { createRouter, createWebHistory } from 'vue-router'
import CurrentWeather from '../views/CurrentWeather.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'current',
      component: CurrentWeather
    },
    {
      path: '/hourly',
      name: 'hourly',
      component: () => import('../views/HourlyWeather.vue')
    },
    {
      path: '/weekly',
      name: 'weekly',
      component: () => import('../views/WeeklyWeather.vue')
    },
    {
      path: '/air-pollution',
      name: 'airPollution',
      component: () => import('../views/AirPollution.vue')
    }
  ]
})

export default router

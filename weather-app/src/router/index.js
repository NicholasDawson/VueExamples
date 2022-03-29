import { createRouter, createWebHashHistory } from 'vue-router'
import CurrentWeather from '../views/CurrentWeather.vue'

const router = createRouter({
  history: createWebHashHistory(),
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
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    }
  ]
})

export default router

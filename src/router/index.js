import Vue from 'vue'
import VueRouter from 'vue-router'
import Accesible from '../views/Accesible.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accesible',
    component: Accesible
  },
  {
    path: '/noaccesible',
    name: 'NoAccesible',
    component: () => import(/* webpackChunkName: "about" */ '../views/NoAccesible.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  path: '/interaccion2023/',
  routes
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/listaproyectos',
    name: 'ListaProyectos',
    component: () => import ( /* webpackChunkName: "ListaProyectos" */ '../views/ListaProyectos.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: '/interaccion2023',
  routes
})

export default router
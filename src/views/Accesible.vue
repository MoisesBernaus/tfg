<template>
  <div>
    <main>
      <div id="element1"></div>
      <presentacion/>
      <div id="element2"></div>
      <sede/>
      <div id="element3"></div>
      <contacto/>
    </main>
    <footer>
      <peu-pag/>
    </footer>
 </div>
</template>

<script>

import Presentacion from '../components/Presentacion.vue'
import Sede from '@/components/Sede.vue'
import Contacto from '@/components/Contacto.vue'
import PeuPag from '@/components/PeuPag.vue'

export default {
  name: 'HomeView',
  components: {
    Presentacion,
    Sede,
    Contacto,
    PeuPag,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: black
}
</style>
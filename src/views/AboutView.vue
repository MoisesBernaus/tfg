<template>
  <div>
    <div id="element1"></div>
    <presentacion/>
    <div id="element2"></div>
    <sede/>
    <div id="element3"></div>
    <contacto/> 
    <modal/>
 </div>
</template>

<script>
import Presentacion from '../components/Presentacion.vue'
import Sede from '../components/Sede.vue'
import Contacto from '../components/Contacto.vue'
import Modal from '../components/Modal.vue'

export default {
  name: 'AboutView',
  components: {
    Presentacion,
    Sede,
    Contacto,
    Modal
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
/*html, body {
    margin: 0;
    padding: 0;
    background-color:rgb(162, 148, 148);
}*/

</style>
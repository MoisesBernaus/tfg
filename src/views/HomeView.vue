<template>
  <div>
    <presentacion/>
    <modal/>
 </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Presentacion from '../components/Presentacion.vue'
import Modal from '../components/Modal.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Presentacion,
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
</style>
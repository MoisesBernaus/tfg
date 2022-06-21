<template>
  <div>
    <div id="element1"></div>
    <presentacion-no-ac/>
    <div id="element2"></div>
    <sede-no-ac/>
    <div id="element3"></div>
    <contacto-no-ac/>
    <br/>
    <peu-pag/>
 </div>
</template>

<script>
import PresentacionNoAc from '../components/PresentacionNoAc.vue'
import SedeNoAc from '../components/SedeNoAc.vue'
import ContactoNoAc from '../components/ContactoNoAc.vue'
import Modal from '../components/Modal.vue'
import PeuPag from '../components/PeuPag.vue'

export default {
  name: 'AboutView',
  components: {
    PresentacionNoAc,
    SedeNoAc,
    ContactoNoAc,
    Modal,
    PeuPag
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
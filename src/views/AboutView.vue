<template>
 <div>
    <nav-bar/>
    <presentacion/>
    <h1>Bienvenido a la web accesible</h1>
 </div>
</template>

<script>
import NavBar from './components/NavBar'
import Presentacion from './components/Presentacion.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Presentacion
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


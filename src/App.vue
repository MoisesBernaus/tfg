<template>
  <div>
    <nav-bar/>
    <router-view/>
 </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
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

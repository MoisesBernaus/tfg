<template>
    <nav-bar msg="Welcome to Your Vue.js App"/>
</template>

<script>
import NavBar from './components/NavBar'
import HelloWorld from './components/HelloWorld'


export default {
  name: 'App',
  components: {
    HelloWorld,
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
html, body {
    margin: 0;
    padding: 0;
    background-color:rgb(162, 148, 148);
}

</style>

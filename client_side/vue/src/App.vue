<template>
  <div id="app">
    <sidebar></sidebar>
    <v-header></v-header>
    <router-view></router-view>

  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import About from './components/About'
import VHeader from './components/Header'
export default {
  name: 'App',
  components: {
    Sidebar,
    VHeader,
    About
  }
}
</script>

<style>
html {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

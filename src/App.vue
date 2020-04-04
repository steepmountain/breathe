<template>
  <div id="app">
    <Breathe msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Breathe from './components/Breathe.vue'

export default {
  name: 'App',
  components: {
    Breathe
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
}
</style>

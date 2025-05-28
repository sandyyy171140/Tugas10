<template>
  <div id="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from './components/sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style>
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
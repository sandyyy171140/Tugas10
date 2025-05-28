<template>
  <aside class="sidebar">
    <h2>Thrift Shop</h2>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  width: 200px;
  padding: 20px;
  background-color: #000000;
  height: 100vh;
}
nav {
  display: flex;
  flex-direction: column;
}
a {
  margin: 5px 0;
  text-decoration: none;
  color: #2c3e50;
}
a.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
}
</style>
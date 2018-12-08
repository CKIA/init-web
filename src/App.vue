<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/hello" tag="li"><a href="/hello">Helloword</a></router-link>
    <router-link to="/bye" tag="li"><a href="/bye">bye-bye</a></router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>

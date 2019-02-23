<template>
  <div id="app">
    <router-view/>
    <loading :show="$store.state.isShow"></loading>
    <alert></alert>
  </div>
</template>

<script>
import Loading from "vux/src/components/loading/index";
import Alert from "vux/src/components/alert/index";
export default {
  name: 'App',
  components: {Alert, Loading},
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background-color: #efeff4;
  margin: 0;
}
a{
  text-decoration: none;
}
</style>

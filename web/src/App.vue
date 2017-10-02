<template>
  <div id="app">
    <img v-on:click="goHome()" style="cursor: pointer" src="./assets/icon.png">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'app'
      }
    },
    methods: {
      goHome () {
        this.$router.push('/')
      }
    }
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
</style>

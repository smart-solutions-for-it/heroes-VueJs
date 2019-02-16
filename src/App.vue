<template>
  <div id="app">
    <h2 class='text-primary'> {{title}} </h2>
    <router-link to="/dashboard" class="btn mr-3" active-class="btn-primary">Dashboard</router-link>
    <router-link to="/heroes" class="btn" active-class="btn-primary">Heroes</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        title: 'Tour of heroes',
      }
    }
  }
</script>

<style>
  #app {
    text-align: center;
  }
</style>

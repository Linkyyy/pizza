<template>
  <div id="app">
    <div class="container">
      <my-header></my-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "../src/components/Header";
export default {
  components: {
    "my-header": Header,
  },
};
</script>

<style>
</style>

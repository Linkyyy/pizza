<template>
  <div class="d1">
    <div class="d2">
      <h1>欢迎大家品尝pizza</h1>
      <h2>你想吃的我们都有！</h2>
      <button type="button" class="btn btn-success center-block" @click="goToHome">
        点我订餐
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToHome() {
      this.$router.push("/Menu");
    },
  },
};
</script>
<style>
.d1 {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/pexels-engin-akyurt-1458426.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 85vh;
}
.d2{
  padding: 20px;
  background: rgba(255, 255, 255, 0.534);
}
</style>
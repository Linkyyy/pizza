<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <a class="navbar-brand" to="#">pizza点餐</a>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li :class="[this.$route.path=='/'?'active':'']" ><router-link :to="homeLink" >主页</router-link></li>
        <li :class="[this.$route.path=='/Menu'?'active':'']" ><router-link to="/Menu" >菜单</router-link></li>
        <li :class="[this.$route.path=='/Admin'?'active':'']" ><router-link to="/Admin" @click="index=2">管理</router-link></li>
        <li :class="[this.$route.path.match(/\/About/)?'active':'']" ><router-link to="/About/History" >关于我们</router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li :class="[this.$route.path=='/Login'?'active':'']" v-show="!this.$store.state.isLogin"><router-link to="/Login">登陆</router-link></li>
        <li :class="[this.$route.path=='/Register'?'active':'']" v-show="!this.$store.state.isLogin"><router-link to="/Register">注册</router-link></li>
        <li  v-show="this.$store.state.isLogin"><router-link to="/">{{this.$store.state.currentUser}}</router-link></li>
        <li  v-show="this.$store.state.isLogin" @click="logout" ><router-link to="/">登出</router-link></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
export default {
    data:function(){
        return{
            index:0,
            homeLink:'/'
        }
    },
    methods:{
      logout(){
        this.$store.commit('changeState',false)
        this.$store.commit('changeUser','')
      }
    },
}
</script>
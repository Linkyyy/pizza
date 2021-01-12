<template>
  <div class="container">
    <div class="row">
      <ul class="nav nav-tabs">
        <li role="presentation" :class="this.$route.path=='/About/History'?'active':''" >
          <router-link to="/About/History">历史订单</router-link>
        </li>
        <li role="presentation" :class="this.$route.path=='/About/Delivery'?'active':''" ><router-link to="/About/Delivery">快递信息</router-link></li>
        <li role="presentation" :class="this.$route.path=='/AboutOrderingGuide'?'active':''" ><router-link to="/About/OrderingGuide">点餐文档</router-link></li>
        <li role="presentation" :class="this.$route.path=='/About/Contact'?'active':''" ><router-link to="/About/Contact">联系我们</router-link></li>
      </ul>
    </div>
    <div class="row">
        <router-view>
        </router-view>
    </div>
  </div>
</template>
<script>
export default {
    data:function(){
        return {
            index:0
        }
    }
}
</script>
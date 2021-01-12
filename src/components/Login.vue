<template>
  <div class="">
    <div class="panel panel-default">
      <div class="panel-heading">登录</div>
      <div class="panel-body">
        <form @submit.prevent="onSummit">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-success center-block">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      email,
      password,
    };
  },
  methods: {
    onSummit() {
      let that=this;
      axios.get('/user.json').then(res=>{
        const data=res.data
        const users=[]
        for(let key in data){
          const user =data[key]
          users.push(user)
        }
        let users_f=users.filter((item)=>{
          return item.email==that.email&&item.password==that.password
        })
        if(users_f&& users_f.length>0){
          this.$store.commit('changeState',true);
          this.$store.commit('changeUser',users_f[0].email)
          alert('登录成功！');
          this.$router.push('/')
        }
        else alert("账号或者密码错误！")
      })
    },
  },
};
</script>

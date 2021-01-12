<template>
  <div class="">
    <div class="panel panel-default">
      <div class="panel-heading">注册</div>
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
          <div class="form-group">
            <label for="exampleInputPassword1">Password Confirm</label>
            <input
              v-model="passwordConfirm"
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
import axios from "axios";
export default {
  data() {
    return {
      email,
      password,
      passwordConfirm,
    };
  },
  methods: {
    onSummit() {
      if (this.password == this.passwordConfirm) {
        const Data = {
          email: this.email,
          password: this.password,
        };
        axios.post("/user.json", Data).then((res) => {
          alert("注册成功！");
          this.$router.push("/");
        });
      } else {
        alert("两次密码不一致！");
      }
    },
  },
};
</script>

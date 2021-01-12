<template>
  <div class="">
    <div class="col-sm-8">
      <div class="page-header">
        <h1>添加菜单</h1>
      </div>
      <form @submit.prevent="onSummit">
        <div class="form-group">
          <label for="exampleInputEmail1">披萨名</label>
          <input
            v-model="name"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">价格</label>
          <input
            v-model="price"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="price"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">描述</label>
          <input
            v-model="info"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="info"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">图片路径</label>
          <input
            v-model="img"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="path"
          />
        </div>
        <button type="submit" class="btn btn-success center-block">
          Submit
        </button>
      </form>
    </div>
    <div class="col-sm-4">
      <div class="page-header">
        <h1>我的添加</h1>
      </div>
      <div class="panel panel-default">
        <div class="panel-body">
          <div
            class="div-item"
            v-for="item in this.$store.state.menuItems"
            :key="item.name"
            style="padding: 10px 0"
          >
            <span>{{ item.name }}</span>
            <button
              class="btn btn-sm btn-danger"
              style="outline: none; float: right"
              @click="deleteItem(item)"
              v-if="item.id"
            >
              X
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name,
      price,
      info,
      img,
      items: [],
    };
  },
  methods: {
    onSummit() {
      const Data = {
        name: this.name + " ￥" + this.price,
        info: this.info,
        img: this.img,
        id:''
      };
    this.$store.commit('addMenuItem',Data)
     axios.post("/menu.json", Data).then((res) => {
        });
    },
    deleteItem(item) {
      this.$store.commit('deleteMenuItem',item)
      axios.delete('/menu/'+item.id+'/.json').then((res)=>{
        console.log(res)
      })
    },
  },
};
</script>

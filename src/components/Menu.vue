<template>
  <div>
    <div class="col-md-8">
      <div class="page-header">
        <h1>菜单</h1>
      </div>
      <div class="row">
        <div
          class="col-xs-6 col-sm-4"
          v-for="item in this.$store.state.menuItems"
          :key="item.name"
        >
          <div class="thumbnail">
            <img :src="item.img" alt="" />
            <div class="caption">
              <h3>{{ item.name }}</h3>
              <p>{{ item.info }}</p>
              <p>
                <button
                  href=""
                  class="btn btn-primary center-block"
                  role="button "
                  @click="addTobaskets(item)"
                >
                  加入购物车
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="page-header">
        <h1>购物车</h1>
      </div>
      <div class="panel panel-default">
        <div class="panel-body">
          <div
            class="div-item"
            v-for="item in baskets"
            :key="item.name"
            style="padding: 10px 0"
          >
            <span>{{ item.name }}</span>
            <div class="right" style="float: right">
              <button
                class="btn btn-sm"
                style="background: transparent; outline: none"
                @click="decreaseQuantity(item)"
              >
                -
              </button>
              <span>{{ item.quantity }}</span>
              <button
                class="btn btn-sm"
                style="background: transparent; outline: none"
                @click="increaseQuantity(item)"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <span style="margin: 15px" v-if="baskets.length > 0"
          >总价：￥{{ total }}</span
        >
      </div>
    </div>
    <button
      type="button"
      v-if="baskets.length > 0"
      class="btn btn-success center-block"
    >
      提交
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      baskets: [],
    };
  },
  computed: {
    total() {
      let cost = 0;
      for (let index in this.baskets) {
        let price = parseInt(this.baskets[index].name.slice(-2));
        cost += price * this.baskets[index].quantity;
      }
      return cost;
    },
  },
  methods: {
    addTobaskets(item) {
      let basket = {
        name: item.name,
        quantity: 1,
      };
      if (this.baskets.length > 0) {
        let result = this.baskets.filter((basket) => {
          return basket.name == item.name;
        });
        if (result && result.length > 0) {
          result[0].quantity++;
        } else {
          this.baskets.push(basket);
        }
      } else {
        this.baskets.push(basket);
      }
    },
    decreaseQuantity(item) {
      item.quantity--;
      if (item.quantity == 0) {
        this.baskets=this.baskets.filter((basket)=>{
          return basket!=item
        })
      }
    },
    increaseQuantity(item) {
      item.quantity++;
    },
  },
};
</script>
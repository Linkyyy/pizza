import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =new Vuex.Store({
    state:{
        isLogin:false,
        currentUser:'',
        menuItems:[ {
            name: "巴厘岛风味披萨 ￥42",
            info: "既然去不了巴厘岛，那么尝尝巴厘岛风味的美食也是很不错的啊。",
            img: require("./assets/p.png"),
          },
          {
            name: "美味培根披萨 ￥48",
            info: "这是一款特别受到大众喜爱的披萨。",
            img: require("./assets/p1.png"),
          },
          {
            name: "酸甜水果披萨 ￥33",
            info:
              "如果你喜欢吃水果，而只吃水果又吃不饱的话，那么就选择这一款披萨吧。",
            img: require("./assets/p2.png"),
          },
          {
            name: "浓郁海鲜口味披萨 ￥68",
            info:
              "如果你喜欢吃海鲜，而又觉得海鲜太贵的话，那么就去吃这一款披萨吧",
            img: require("./assets/p3.png"),
          },
          {
            name: "香甜玉米披萨 ￥48",
            info: "这款披萨是比较小清新的了，口感不腻，而且还比较香甜",
            img: require("./assets/p4.png"),
          },]
    },
    getters:{
        getUsername: state=>state.currentUser
    },
    mutations:{
        addMenuItem(state,item){
            state.menuItems.push(item)
        },
        deleteMenuItem(state,item){
            state.menuItems.forEach((i,index) => {
                if(i==item)state.menuItems.splice(index,1)
            });
        },
        changeState(state,is){
            state.isLogin=is
        },
        changeUser(state,username){
            state.currentUser=username
        }
    },
    actions:{
        
    }
})
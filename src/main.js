import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import {routes} from './routes'
import {store} from './store'

axios.defaults.baseURL='https://pizza-d40c8-default-rtdb.firebaseio.com/'
// Vue.prototype.http=axios
Vue.use(VueRouter)
const router=new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    if(savedPosition)return savedPosition
    else return{x:0,y:0}
  }
})

//全局路由
router.beforeEach((to,from,next)=>{
  if(to.fullPath=='/Admin')
  {
    let user=store.getters.getUsername
    if(user)
    {
      next()
    }
    else{
      alert('请先登录');
      next(false);
    }
  }
  else next()
})

new Vue({
  el: '#app',
  router,
  store,
  created(){
    axios.get('/menu.json').then(res=>{
      const data=res.data
      const menuItems=[]
      for(let key in data){
        const menuItem =data[key]
        menuItem.id=key;
        this.$store.commit('addMenuItem',menuItem)
      }
    })
    console.log( this.$store.state.menuItems)
  },
  render: h => h(App)
})

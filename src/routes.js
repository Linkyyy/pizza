
//一级路由
import Home from '../src/components/Home'
import Admin from '../src/components/Admin'
import Menu from '../src/components/Menu'
import About from '../src/components/about/About'
import Login from '../src/components/Login'
import Register from '../src/components/Register'

//二级路由
import OrderingGuide from './components/about/OrderingGuide'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import Contact from './components/about/Contact'



export const routes = [
  { path: '/', component: Home },
  { path: '/Admin', component: Admin },
  { path: '/Menu', component: Menu },
  {
    path: '/About', component: About, children: [
      { path: '/About/Contact', component: Contact },
      { path: '/About/OrderingGuide', component: OrderingGuide },
      { path: '/About/History', component: History },
      { path: '/About/Delivery', component: Delivery },
    ]
  },
  { path: '/Login', component: Login },
  { path: '/Register', component: Register },
]
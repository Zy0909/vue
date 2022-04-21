//配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'
//import Home from '../components/Home'
//import About from '../components/About'
//import User from '../components/User'
const Home = () => import('../components/Home')
const HomeNews=()=> import('../components/HomeNews')
const HomeMessage=()=> import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile =() => import('../components/Profile')

Vue.use(Router)//安装插件

//配置路由和组件之间的应用关系，将router对象传入到vue实例
export default new Router({
  routes: [
    {
      path: '/',//
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'',
          redirect:'news'
        },
        {
          path:'news',
          component: HomeNews
        },
        {
          path:'message',
          component:HomeMessage
        }
      ]
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/user/:abc',//动态路由
      component:User
    },
    {
      path:'/profile',
      component: Profile
    }
  ],
  mode:'history'
})

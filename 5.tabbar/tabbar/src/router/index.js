import Vue from 'vue'
import Router from 'vue-router'
const Home=() => import('../views/home/Home')
const Category=() => import('../views/Category/Category')
const Shopcart=() => import('../views/Shopcart/Shopcart')
const Profile=() => import('../views/Profile/Profile')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/Category',
      component:Category
    },
    {
      path:'/Shopcart',
      component:Shopcart
    },
    {
      path:'/Profile',
      component:Profile
    }
  ],
  mode:'history'
})
//1.安装插件 2.创建路由对象 3.导出

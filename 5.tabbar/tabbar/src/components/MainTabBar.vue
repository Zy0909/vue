<template>
  <tab-bar>
    <slot>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="../assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/home-active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="../assets/img/tabbar/catagory.png" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/category-active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="blue">
        <img slot="item-icon" src="../assets/img/tabbar/shopcart.png" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/shopcart-active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="../assets/img/tabbar/profile.png" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/profile-active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </slot>
  </tab-bar>
</template>

<script>
  import TabBar from "../components/tabbar/TabBar";
  import TabBarItem from "../components/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>

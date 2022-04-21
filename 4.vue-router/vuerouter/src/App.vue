<template>
  <div id="app">
    <!--<router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>-->
   <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!--<router-link v-bind:to="'/user/'+userId">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'why',age:18, height:1.88}}">档案</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <img src="./assets/logo.png">
    <router-view/>//占位，渲染到这个位置
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:'lisi'
    }
  },
  methods:{
    homeClick() {
      this.$router.push('/home')
      console.log('homeClick')
    },
    aboutClick() {
      this.$router.push('/about ')
      console.log('aboutClick')
    },
    userClick(){
      this.$router.push('/user/'+this.userId)
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
            name:'why',
            age:19,
            height:1.88
        }
      })
    }
  }
}
</script>

<style>
  .router-link-active {
    color: red;
  }
</style>

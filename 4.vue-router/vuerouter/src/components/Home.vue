<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <keep-alive>
    <router-view></router-view></keep-alive>
  </div>
</template>

<script>
  export default {
    name: "Home",
    created(){
      console.log('created');
    },
    destroyed() {
      console.log('destroyed')
    },
    activated(){
      console.log(this.$route.push(this.path))
    },
    beforeRouteLeave(to,from,next){
      console.log(this.$route.path)
      this.path=this.$route.path
      next()
    }
  }
</script>

<style scoped>

</style>

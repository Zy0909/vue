<template>
<div class="tab-bar-item" @click="itemClick">
  <div v-if="!isActive"><slot name="item-icon"></slot></div>
  <div v-else><slot name="item-icon-active"></slot></div>
  <div :style="activeStyle"><slot name="item-text"></slot></div><!--slot中内容会被替换掉 -->
</div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      activeColor:{
        type: String,
        default: 'red'
      }
      },
    data(){
      return{
        //isActive:true
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1 //拿到处于活跃状态的path,判断里面的Path是否等于item1中的path,true
      },
      activeStyle(){
        return this.isActive? {color:this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
.tab-bar-item {
  flex:1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>

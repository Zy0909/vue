<template>
  <div id="app">
    <h2>{{$index.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$index.getters.fullname}}</h2>
    <h2>{{$index.getters.fullname2}}</h2>
    <h2>{{$index.getters.fullname3}}</h2>
    <div>---------------App内容----------------</div>
    <h3>{{$index.state.counter}}</h3>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <div>--------------------App内容：getters相关信息------------------</div>
    <h2>{{$index.getters.powerCounter}}</h2>
    <h2>{{$index.getters.more20stu}}</h2>
    <h2>{{$index.getters.more20stulength}}</h2>
    <h2>{{$index.getters.moreAgeStu(12)}}</h2>
    <div>--------------------App内容：info对象内容是否是响应式------------------</div>
     <h2>{{$index.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <div>-----------------Hello Vuex内容-------------</div>
    <HelloVuex ></HelloVuex>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import {INCREMENT} from './store/mutations-types'; //不能直接导入，要加花括号，因为没用 export default导出，是普通导出
  export default {
  name: 'App',
    data(){
    return {
    }
    },
    components:{
    HelloVuex
    },
    methods:{
    addition(){
      this.$store.commit(INCREMENT)
    },
      subtraction(){
      this.$store.commit('decrement')
    },
      addCount(count){
      this.$store.commit('incrementCount',count)//这样count就能传到mutaition方法里
      },
      addStudent(){
      const stu={id:114, name:'wang', age:40}
      this.$store.commit('addStu',stu)
      },
      updateInfo(){
      //this.$index.commit('updateInfo')
        this.$store.dispatch('aUpdateInfo', {
          message:'我是携带的信息',
          success:() =>{
            console.log('里面已经完成了')
          }
        })
      },
      updateName(){
        this.$store.commit('updateName', 'lisi')
      }
    }
}
</script>

<style>

</style>

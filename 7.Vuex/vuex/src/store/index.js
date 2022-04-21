import Vue from 'vue';
import Vuex from 'vuex';
import {INCREMENT} from './mutations-types';

Vue.use(Vuex)
const moduleA={
  state:{
    name:'zhangsan'
  },
  mutations:{
    updateName(state,payload){ //payload是外界给的名字
     state.name=payload
    }
  },
  actions:{},
  getters:{}
}

const store=new Vuex.Store({
  state:{
   counter:1000,
    students:[
      {id:110, name:'why', age:18},
      {id:111, name:'mary', age:24},
      {id:112, name:'bob', age:30},
      {id:113, name:'zoe', age:10}
    ],
     info:{
     name:'miemie',
       age:40,
       height:2
     }
  },
  mutations:{

  },
  actions:{
    aUpdateInfo(context,payload){
      setTimeout(() =>{
        context.commit('updateInfo')
        console.log(payload.message);
        payload.success()
      },1000)
    }
    },
  getters:{
    powerCounter(state){
      return state.counter*state.counter
    },
    more20stu(state){
        return state.students.filter(s => s.age>=20 )
    },
    more20stuLength(state,getters){
      return getters.more20stu.length
    },
    moreAgeStu(state){
        return age =>{
          return state.students.filter(s => s.age>=age)
        }
      },
    fullname(state){
      return state.name +"11111"
    },
    fullname2(state,getters){
      return getters.fullname+"22222"
    },
    fullname3(state,getters,rootState){
      return getters.fullname2+rootState.counter
    }
    },
  modules:{
     a:moduleA
  },
})

export default store

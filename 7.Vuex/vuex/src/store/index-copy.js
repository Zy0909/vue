import Vue from 'vue';
import Vuex from 'vuex';
import {INCREMENT} from './mutations-types';
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'


Vue.use(Vuex)
const state= {
  counter: 1000,
  students: [
    {id: 110, name: 'why', age: 18},
    {id: 111, name: 'mary', age: 24},
    {id: 112, name: 'bob', age: 30},
    {id: 113, name: 'zoe', age: 10}
  ],
  info: {
    name: 'miemie',
    age: 40,
    height: 2
  }
}
const store=new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    a:moduleA
  },
})

export default store

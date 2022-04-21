export default{
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

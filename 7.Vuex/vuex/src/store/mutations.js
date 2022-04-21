import {INCREMENT} from './mutations-types'
export default{
  [INCREMENT](state){
    state.counter++
  },
  decrement(state){
    state.counter--
  },
  incrementCount(state,count){ //这里写count就能传过来了
    state.counter+=count
  },
  addStu(state,stu){
    state.students.push(stu)
  },
  updateInfo(state){
    state.info.name='leilei'
  }
}

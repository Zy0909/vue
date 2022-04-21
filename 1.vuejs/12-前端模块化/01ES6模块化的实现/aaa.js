var name='小明'
    var age=18
    var flag=true
function sum(num1,num2){
  return num1+num2
}
if(flag){
  console.log(sum(20,30));
}
export {
  flag,sum
}
export function mul(num1,num2){
  return num1*num2
}
export class Person{
  run(){
    console.log('在奔跑')
  }
}
export default name='你好啊'
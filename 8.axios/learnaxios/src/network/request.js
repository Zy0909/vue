import axios from 'axios'

export function request(config){
  return new Promise((resolve,reject) =>{
    const instance=axios.create({  //创建axios实例
      url:'https://123.207.32.32:8000',
      timeout:5000
    })

    //axios拦截器使用
    instance.interceptors.request.use(aaa=>{
      console.log(aaa);
      return config
    }, err=>{
      console.log(err);
    }

    )


    //发送真正的网络请求
    return instance(config)//返回的就是promise
    }

/*
export function request(config,success,failure){
    const instance=axios.create({
      url:'https://123.207.32.32:8000',
      timeout:5000
    })
    instance(config).then( res =>{
   // console.log(res);
    success(res)
  }).catch( err =>{
   // console.log(err);
    failure(err)
  })
}*/

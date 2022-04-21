const path=require('path')
module.exports={
  entry:'./src/main',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  module :{
    rules:[
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ]
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  }
}
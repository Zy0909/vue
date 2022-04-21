const path=require('path')
const webpack=require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')
module.exports={
  entry:'./src/main',
  output:{
    path:path.resolve(__dirname,'../dist'),
    filename:'bundle.js',
    //publicPath:'dist/'
  },
  plugins:[
    new webpack.BannerPlugin('最终版权归A所有'),
    new HtmlWebpackPlugin({template:'index.html'})
  ]
}
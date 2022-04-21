const webpackMerge=require('webpack-merge')
const baseConfig=require('./base.config')
module.exports=webpackMerge(naseConfig,{
  devServer: {
    contentBase: './dist',
    inline: true
  }
})
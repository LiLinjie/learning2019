const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {// 压缩 html
        removeComments: true, // 移除注释
        collapseWhitespace: true, // 移除空格
        removeAttributeQuotes: true // 移除属性引号
      }
    }),
    new VueLoaderPlugin()
  ]
})

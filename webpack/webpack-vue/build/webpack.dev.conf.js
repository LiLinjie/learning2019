const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// 路径处理函数
const resolve = dir => path.join(__dirname, '..', dir)

module.exports = merge(baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', // 本地模板的位置
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin()
  ],
  devServer: {
    hot: true, // 热更新
    port: 8080,  // 端口号
    open: true,  // 自动打开
    quiet: true, // 关闭 webpack-dev-server 的提示，用 friendly-error-plugin
    overlay: true,
    host: 'localhost',
    clientLogLevel: 'warning', // 控制台提示信息级别是 warning 以上
  }
})

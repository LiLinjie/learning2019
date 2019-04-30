var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')
var path = require('path')
var webpack = require('webpack')

module.exports = merge(baseConfig, {
  devtool: 'inline-source-map',  // 压缩方式
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    contentBase: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'vue-style-loader'
          },
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})

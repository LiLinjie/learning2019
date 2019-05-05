const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { resolve } = require('./util')

module.exports = merge(baseConfig, {
  bail: true,
  devtool: 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: resolve('static'),
        to: resolve('dist/static')
      }
    ]),
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {// 压缩 html
        removeComments: true, // 移除注释
        collapseWhitespace: true, // 移除空格
        removeAttributeQuotes: true // 移除属性引号
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new OptimizeCssAssetsPlugin(),
  ]
})

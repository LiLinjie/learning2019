const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'static',
        to: 'static'
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
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new OptimizeCssAssetsPlugin(),
  ]
})

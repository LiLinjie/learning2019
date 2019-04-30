var merge = require('webpack-merge');
var baseConfig = require('./webpack.base.conf');
var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(baseConfig, {
  devtool: 'source-map', // 压缩方式
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
          },
        },
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
})

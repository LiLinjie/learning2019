var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var VueLoaderPlugin = require('vue-loader/lib/plugin')
var AutoDllWebpackPlugin = require('autodll-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: ['vue-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HashedModuleIdsPlugin(), // 解决vender后面的hash每次都改变
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
    new AutoDllWebpackPlugin({
      inject: true,
      debugger: true,
      filename: '[name].js',
      path: './dll',
      entry: {
        vendor: ['vue']
      }
    }),
    new webpack.optimize.SplitChunksPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.css'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src')
    }
  }
}

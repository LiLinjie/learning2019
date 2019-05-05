const util = require('./util')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: './src/main.js'
  },
  output: {
    path: util.resolve('dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'], // 引入 js vue json 文件时可以不用写后缀名
    alias: {
      '@': util.resolve('src'), // 配置 @ 指向 src
    },
  },
  module: {
    rules: [
      ...util.eslint,
      ...util.cssLoaders,
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [util.resolve('src')]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [util.resolve('src')]
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        loader: 'url-loader',  // 设置为 url-loader 解析，会将图片解析为 base64 加载
        options: {
          limit: 10240, // 10kb
          name: 'images/[name].[hash:7].[ext]', // (原始文件名.hash.原始后缀名)
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240, // 10kb
          name: 'images/[name].[hash:7].[ext]', // (原始文件名.hash.原始后缀名)
        }
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  stats: {
    children: false
  }
}

const path = require('path')

// 路径处理函数
const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
  entry: {
    app: './src/main.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'], // 引入 js vue json 文件时可以不用写后缀名
    alias: {
      '@': resolve('src'), // 配置 @ 指向 src
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [resolve('src')]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        loader: 'url-loader'  // 设置为 url-loader 解析，会将图片解析为 base64 加载
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')]
      }
    ]
  }
}

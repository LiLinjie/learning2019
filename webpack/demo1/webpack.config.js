const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCss = require('optimize-css-assets-webpack-plugin')


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'less-loader'
          ]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          }
        ]
      }
    ]
  },

  // 代码模块路径解析配置
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"],
  },

  plugins: [
    new OptimizeCss(),
    new UglifyPlugin(),
    new ExtractTextPlugin('index.css'),
    new HtmlPlugin({
      filename: 'index.html',   // 配置输出文件名和路径
      template: 'src/index.html', // 配置文件模板
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './static'),
        to: 'static',
        ignore: ['.*']
      }
    ])
  ]
}

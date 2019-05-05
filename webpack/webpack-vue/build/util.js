const path = require('path');

// 引入抽取css的loader
const CssExtractLoader = require('mini-css-extract-plugin').loader;

// 路径处理函数
const resolve = dir => path.resolve(__dirname, '../', dir)

// 环境判断
const IS_PROD = process.env.NODE_ENV === 'production';

// eslint配置
const getEslintRules = () => {
  let eslint = [];
  if (!IS_PROD) {
    eslint = [{
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: resolve('src'),
      options: {
        formatter: require('eslint-friendly-formatter'), // eslint 友好提示
        emitWarning: true,
      },
    }];
  }
  return eslint;
}

// css loader配置
const cssLoaders = () => {
  const generateCssLoaders = loaderName => {
    const baseLoader = ['css-loader', 'postcss-loader'];
    // 如果有名称则创建一个该名称的 loader 来解析，例如 scss、less、stylus
    if (loaderName) {
      baseLoader.push(`${loaderName}-loader`)
      if (loaderName === 'less') {
        baseLoader.push({
          loader: 'style-resources-loader',
          options: {
            patterns: [
              resolve('src/assets/less/mixin.less')
            ]
          }
        })
      }
    }
    // 如果是生产环境就引入提取 css 的 loader
    if (IS_PROD) {
      baseLoader.unshift(CssExtractLoader);
    }
    // style-loader 在最前，插入到 html 里
    return ['style-loader', ...baseLoader];
  };
  const loaderObj = {
    css: generateCssLoaders(), // 开发环境生成 ['style-loader', 'css-loader']
    'less': generateCssLoaders('less') // 开发环境生成 ['style-loader', 'css-loader', 'less-loader']
  }
  const loaders = [];
  // 生成带 test 的完整 rule
  for (const name in loaderObj) {
    loaders.push({
      test: new RegExp(`\\.${name}$`),
      use: loaderObj[name],
    });
  }
  return loaders;
};

module.exports = {
  IS_PROD,
  resolve,
  eslint: getEslintRules(),
  cssLoaders: cssLoaders(),
}

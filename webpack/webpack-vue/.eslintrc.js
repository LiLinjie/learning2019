module.exports = {
  root: true, // 设置为根目录，不会再向上寻找
  parserOptions: {
    parser: 'babel-eslint', // 使用 babel-eslint 来解析
    sourceType: 'module', // 代码是 module 模块则设置为 module
  },
  env: {
    browser: true, // 设置浏览器环境
  },
  extends: [
    'plugin:vue/essential', // vue 基本规则
    'airbnb-base' // airbnb eslint 规则
  ],
  // vue 文件校验
  plugins: ['vue'],
  // 个性化规则
  rules: {
    "space-before-function-paren": ["error", "always"],
    'no-console': 'off',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js' // 指向 webpack 中 resolve 配置所在的文件
      }
    }
  }
}

// 添加前缀
const autoprefixer = require('autoprefixer');
// 合并css文件
const atImport = require('postcss-import')
// 压缩代码
const cssnano = require('cssnano');
// 类似 ES6 的 Babel(实现 ES6 到 ES5 的代码转换 )
const cssnext = require('postcss-cssnext');

module.exports = {
  plugins: [
    cssnext,
    atImport,
    autoprefixer({
      // browsers: ['> 1%']
      browsers: ['last 2 versions']
    }),
    // 放置最后
    cssnano
  ]
}
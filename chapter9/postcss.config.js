// 添加前缀
const autoprefixer = require('autoprefixer');
// 合并css文件
const atImport = require('postcss-import')
// 压缩代码
const cssnano = require('cssnano');
// 
const cssnext = require('cssnext');

module.exports = {
  plugins: [
    atImport,
    autoprefixer({
      // browsers: ['> 1%']
      browsers: ['last 2 versions']
    }),
    // 放置最后
    cssnano
  ]
}
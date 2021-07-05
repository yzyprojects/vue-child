const path = require('path')
module.exports = {
  lintOnSave: false,
  publicPath: 'http://localhost:8082/',
  devServer: {
    port: 8082,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `vueapp`,
      libraryTarget: 'umd' // 把微应用打包成 umd 库格式
    },
    resolve:{
      alias: {
        '@common':  path.join(__dirname, 'src/common'),
        }
    }
  }
}

function resolve (dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}

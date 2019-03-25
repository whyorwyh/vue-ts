const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    /* config.plugin('html') */
    config.plugin('html')
      .tap(args => {
        args[0].template = resolve('index.html')
        return args
      })
  }
}

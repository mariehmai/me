module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Marie-h'
      return args
    })
  }
}

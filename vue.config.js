module.exports = {
  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(1000000)
      .maxAssetSize(1000000)
  }
}

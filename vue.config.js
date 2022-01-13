module.exports = {
  // increase maxEntrypointSize and maxAssetSize to avoid webpack build warnings
  chainWebpack: (config) => {
    config.performance.maxEntrypointSize(2000000).maxAssetSize(2000000);
  },
};

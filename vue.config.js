module.exports = {
  // increase maxEntrypointSize and maxAssetSize to avoid webpack build warnings
  chainWebpack: (config) => {
    config.performance.maxEntrypointSize(1000000).maxAssetSize(1000000);
  },
};

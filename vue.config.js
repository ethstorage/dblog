module.exports = {
  configureWebpack: {
    output: {
      filename: `[name].js`,
      chunkFilename: `[name].js`
    },
  },
  css: {
    extract: {
      filename: '[name].css',
      chunkFilename: '[name].css',
    },
  },
  chainWebpack: config => {
    config.module
        .rule("images")
        .set('generator', {
          filename: '[name][ext]'
        });
    config.module
        .rule("svg")
        .set('generator', {
          filename: '[name][ext]'
        });
  },
  productionSourceMap: false,
  publicPath: '/'
};

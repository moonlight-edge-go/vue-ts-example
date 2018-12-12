const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.ts', '.vue'],
      alias: {
        '@Root': path.resolve(__dirname, 'src'),
      }
    }
  }
};

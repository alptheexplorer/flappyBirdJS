// webpack.config.js
module.exports = {
  mode: 'development',
  start: "webpack-dev-server --hot",
  entry: './index.js',
  output: {
    filename: 'main.js',
    publicPath: 'dist'
  }
};

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  module: {
    loaders: [{
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
};

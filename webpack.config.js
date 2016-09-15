const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const env = process.env.NODE_ENV || 'development';

const localClassName = env === 'development'
  ? '[path][name]---[local]'
  : '[hash:base64:10]';

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
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new ExtractTextPlugin('styles.css')
  ],
  module: {
    loaders: [{
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style', `css?modules&localIdentName=${localClassName}!less`)
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
};

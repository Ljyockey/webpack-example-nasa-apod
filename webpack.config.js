'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      { exclude: ['node_modules'], use: {loader: 'babel-loader'}, test: /\.jsx?$/ }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html'
    })
  ]
};
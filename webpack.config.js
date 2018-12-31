'use strict';

module.exports = {
  module: {
    rules: [
      { exclude: ['node_modules'], use: {loader: 'babel-loader'}, test: /\.jsx?$/ },
      { loader: 'style-loader!css-loader', test: /\.css$/ },
      { loader: 'url-loader', test: /\.gif$/ },
      { loader: 'file-loader', test: /\.(ttf|eot|svg)$/ },
    ],
  },
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    },
    extensions: ['.js', '.jsx']
  },
  entry: './src/index.js'
};
'use strict';

module.exports = {
  module: {
    rules: [
      { exclude: ['node_modules'], use: {loader: 'babel-loader'}, test: /\.jsx?$/ },
      {test: /\.s(s|c)ss$/, use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }
      ]}
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  entry: './src/index.js',
  output: {
    filename: 'dist/javascript/[name].js'
  }
};
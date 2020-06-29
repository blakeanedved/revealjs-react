const path = require('path');

module.exports = {
  mode: 'development',
  entry: './test/index.jsx',
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.ttf$/, use: ['file-loader'] },
      { test: /\.woff$/, use: ['file-loader'] },
      { test: /\.eot$/, use: ['file-loader'] },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css'],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'test'),
  },
};

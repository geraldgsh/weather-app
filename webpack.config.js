const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [
    new Dotenv(),
  ],
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
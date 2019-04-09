const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules )/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          modules: true,
          
        },
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx', '.css'] },
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: 'nearbyHomes.app.js',
  },
};

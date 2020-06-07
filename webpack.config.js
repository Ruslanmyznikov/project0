var HtmlWebpackPlugin = require('html-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');

module.exports = {
  entry: './app/src/main.js',
  output: {
    path: path.resolve(__dirname, './app/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'app/src/index.html'}),
    new ManifestPlugin()],
  mode: 'development',
  devServer: { contentBase: './app/dist' }
};
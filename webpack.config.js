var HtmlWebpackPlugin = require('html-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const rootFolder = './app/src/' 
module.exports = {
  devtool: 'source-map',
  entry: {
    home: [rootFolder + 'main.js', rootFolder + 'style.scss'],
    firstPage: [rootFolder + 'pages/first-page/first-page.js', rootFolder + 'pages/first-page/first-page.scss'],
    secondPage: [rootFolder + 'pages/second-page/second-page.js', rootFolder + 'pages/second-page/second-page.scss'],
    thirdPage: [rootFolder + 'pages/third-page/third-page.js', rootFolder + 'pages/third-page/third-page.scss']
  },
  output: {
    path: path.resolve(__dirname, './app/dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: rootFolder + 'index.html',
      inject: true,
      chunks: ['home'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: rootFolder + 'pages/first-page/first-page.html',
      inject: true,
      chunks: ['firstPage'],
      filename: 'first-page.html'
    }),
    new HtmlWebpackPlugin({
      template: rootFolder + 'pages/second-page/second-page.html',
      inject: true,
      chunks: ['secondPage'],
      filename: 'second-page.html'
    }),
    new HtmlWebpackPlugin({
      template: rootFolder + 'pages/third-page/third-page.html',
      inject: true,
      chunks: ['thirdPage'],
      filename: 'third-page.html'
    }),
    new ManifestPlugin(),
    new CleanWebpackPlugin()],
  mode: 'development',
  devServer: { contentBase: './app/dist' },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ]
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
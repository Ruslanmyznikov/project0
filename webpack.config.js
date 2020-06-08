var HtmlWebpackPlugin = require('html-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');

module.exports = {
  entry: {
    home: ['./app/src/main.js', './app/src/style.scss'],
    firstPage: ['./app/src/pages/first-page/first-page.js', './app/src/pages/first-page/first-page.scss']
  },
  output: {
    path: path.resolve(__dirname, './app/dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/src/index.html',
      inject: true,
      chunks: ['home'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: 'app/src/pages/first-page/first-page.html',
      inject: true,
      chunks: ['firstPage'],
      filename: 'first-page'
    }),
    new ManifestPlugin()],
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
    ]
  }
};
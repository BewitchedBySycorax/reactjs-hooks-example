const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ReactJS Hooks Example',
      template: path.resolve(__dirname, './src/template.html'),
    }),
  ],
  devServer: {
    watchOptions: {
      ignored: /node_modules/
    },
    compress: true,
    contentBase: path.join(__dirname, 'public'),
    port: 8081
  }
}

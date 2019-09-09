const path = require('path')
const Dotenv = require("dotenv-webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebPackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, "../client/src/index.html"),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: "../client/src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devServer: {
    contentBase: "./src",
    hot: true,
    port: 3000,
    historyApiFallback: true
  },
  plugins: [new Dotenv(), HTMLWebPackPlugin]
};

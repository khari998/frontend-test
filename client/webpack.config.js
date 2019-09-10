const path = require('path')
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HTMLWebPackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, "../client/src/index.html"),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: ["../client/src/index.tsx", "../client/src/styling.css"],
  output: {
    path: path.resolve(__dirname, "../public/build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // if hmr does not work, this is a forceful method.
              reloadAll: true
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.join(__dirname, "../client/assets/"),
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devServer: {
    contentBase: "../public/build",
    hot: true,
    port: 3000,
    historyApiFallback: true
  },
  plugins: [
    new Dotenv(),
    HTMLWebPackPlugin,
    new MiniCssExtractPlugin({
      filename: "styling.css"
    })
  ]
};

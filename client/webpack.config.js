const path = require('path');
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HTMLWebPackPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, "../client/src/index.html"),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  watch: true,
  mode: "production",
  entry: [
    "../client/src/index.tsx",
    "../client/src/styling.css",
    "../client/src/assets/MapMarker.png"
  ],
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
          "css-loader",
          {
            loader: require.resolve("awesome-typescript-loader")
          },
          {
            loader: require.resolve("react-docgen-typescript-loader")
          }
        ]
      },
      {
        test: /\.(png)$/,
        loader: "file-loader",
        options: {
          name: "./assets/MapMarker.png"
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devServer: {
    contentBase: "../client/src/",
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

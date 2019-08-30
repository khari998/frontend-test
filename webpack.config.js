const path = require('path');

const rules = [{
  test: /\.tsx?/, // handle all tsx files
  exclude: /node_modules/, // do not read files from node_modules
  loader: 'babel-loader' // handle tsx files with babel-loader
}];

module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/index.tsx", // points to index file
  output: {
    path: path.resolve(__dirname, "build"), 
    filename: "bundle.js" // compiled code in build
  },
  module: { rules },
  resolve: { extensions: [".ts", ".tsx", ".js"] }, // handles extensions
  devServer: { // developer server settings
    contentBase: "./",
    port: 3000
  }
};

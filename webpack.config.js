const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]"
              },
              importLoaders: 1
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new HTMLWebpackPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    headers: { 'Access-Control-Allow-Origin': '*' },
    port: 3000,
    hot: true
  }
};

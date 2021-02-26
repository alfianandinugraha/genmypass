const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/** @type {import("webpack").Configuration} */
const webpackConfig = {
  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    port: 5500,
    compress: true,
    contentBase: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: "Genmypass", inject: false, template: "src/index.html" })
  ],
  stats: "errors-only"
}

module.exports = webpackConfig
// Contains base configuration for all environments
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { resolve } = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const resolveConfig = require("./resolve.config.js");

const config = merge(resolveConfig, {
  context: resolve(__dirname, "../src"),

  output: {
    path: resolve(__dirname, "../dist"),
    filename: "bundle.js",
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader", "eslint-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
});

module.exports = config;

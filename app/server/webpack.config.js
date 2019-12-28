const nodeexternals = require("webpack-node-externals");
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = (config) => {
  return {
    context:__dirname,
    entry:  path.resolve(__dirname, 'index.ts'),

    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, '../dist')
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
      rules: [{ test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ }]
    },

    plugins: [
      new ForkTsCheckerWebpackPlugin()
    ],
    externals:[nodeexternals()],
    mode: process.env.NODE_ENV || "development",
    target: 'node'
  }
};

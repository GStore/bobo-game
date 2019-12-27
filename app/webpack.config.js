const nodeexternals = require("webpack-node-externals");
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

const UI = process.env.UI_BUILD || false;

const prefixRE = /^BG_/

function resolveClientEnv (options, raw) {
  const env = {}
  Object.keys(process.env).forEach(key => {
    if (prefixRE.test(key) || key === 'NODE_ENV') {
      env[key] = process.env[key]
    }
  })
  // this can probably be removed
 // env.BASE_URL = options.publicPath

  if (raw) {
    return env
  }

  for (const key in env) {
    env[key] = JSON.stringify(env[key])
  }
  return {
    'process.env': env
  }
}


module.exports = (config) => {
  return {
    entry:  UI ? path.resolve(__dirname, 'src/ui/index.ts') :path.resolve(__dirname, 'src/index.ts'),

    output: {
      filename: UI ? "ui/index.js" : 'index.js',
      path: path.resolve(__dirname, 'dist')
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
      rules: [{ test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ }],
    },

    plugins: UI ? [
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
          filename: "ui/index.html",
          templateParameters: (compilation, assets, pluginOptions) => {
            // enhance html-webpack-plugin's built in template params
            let stats
            return Object.assign({
              // make stats lazy as it is expensive
              get webpack () {
                return stats || (stats = compilation.getStats().toJson())
              },
              compilation: compilation,
              webpackConfig: compilation.options,
              htmlWebpackPlugin: {
                files: assets,
                options: pluginOptions
              }
            }, resolveClientEnv(options, true /* raw */))
          },
          template: path.resolve(__dirname, "src/ui/public/index.html")
        }),
        new webpack.EnvironmentPlugin({
          BG_BASE_URL: "'/'"
        }
        ),
        new CopyPlugin(
          [
            {
              from: path.resolve(__dirname, "src/ui/public"),
              to: path.resolve(__dirname, "dist"),
              toType: 'dir',
              ignore: [
                '.DS_Store',
                {
                  glob: 'index.html',
                  matchBase: false
                }
              ]
            }
          ]
        )
      ] :[
      new ForkTsCheckerWebpackPlugin()
    ],
    externals:[nodeexternals()],
    mode: process.env.NODE_ENV || "development",
    target: UI ? "web" : 'node'
  }
};

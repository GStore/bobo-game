const nodeexternals = require('webpack-node-externals');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const api=process.env.BUILD==="api" || false;

module.exports = () => {
    if(api) {
      console.debug("Building for API");
    }
    return {
        context: __dirname,
        entry: api ? path.resolve(__dirname, path.join("src", "main.ts")) : path.resolve(__dirname, path.join("src", "index.ts")),

        output: {
            filename: api ? "api.js" : 'server.js',
            path: path.resolve(__dirname, '../dist'),
            library: "api",
            libraryTarget: "umd"
        },

        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
        },

        module: {
            rules: [{ test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ }],
        },

        plugins: [new ForkTsCheckerWebpackPlugin()],
        externals: [nodeexternals()],
        mode: process.env.NODE_ENV || 'development',
        target: 'node',
    };
};

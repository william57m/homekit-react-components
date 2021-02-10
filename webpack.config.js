const path = require('path');
const pkg = require('./package.json');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');

const webpackConfigBase = require('./webpack.config.base');

module.exports = merge(webpackConfigBase, {
  entry: "./src/components/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: pkg.name,
    libraryTarget: "umd"
  },
  mode: 'production',
  externals: [nodeExternals()]
});

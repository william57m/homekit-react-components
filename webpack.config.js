const path = require('path');
const pkg = require('./package.json');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');

const webpackConfigBase = require('./webpack.config.base');

module.exports = merge(webpackConfigBase, {
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist/bundle"),
    library: pkg.name,
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  mode: 'production',
  externals: [nodeExternals()],
});

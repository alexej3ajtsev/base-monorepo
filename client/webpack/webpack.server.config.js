const path = require('path');
const commonConfig = require('./webpack.common.config');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge.merge(commonConfig, {
  name: 'server',
  entry: [
    './src/server/index.tsx'
  ],
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
  output: {
    filename: 'ssr.js',
    path: path.resolve(__dirname, '..', '..', 'dist'),
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { context: path.resolve('src', 'server'), from: 'views', to: 'views' },
        { context: path.resolve('src'), from: 'pages', to: 'pages' }
      ],
    }),
  ]
});
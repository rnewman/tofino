// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

import webpack from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';
import defaultConfig from './webpack.base';
import * as Const from '../utils/const';

export const SRC_DIR = path.join(Const.SRC_DIR, 'main');
export const DST_DIR = path.join(Const.LIB_DIR, 'main');

export default {
  ...defaultConfig,
  entry: path.join(SRC_DIR, 'browser.js'),
  output: {
    ...defaultConfig.output,
    path: DST_DIR,
    filename: 'index.js',
    sourceMapFilename: 'index.map',
  },
  target: 'electron',
  plugins: [
    ...defaultConfig.plugins,
    new webpack.DefinePlugin({
      __dirname: '__dirname',
    }),
    new webpack.DefinePlugin({
      PROCESS_TYPE: '"main"',
    }),
    new webpack.DefinePlugin({
      LIBDIR: 'require("path").join(__dirname, "..")',
    }),
  ],
  externals: [
    ...defaultConfig.externals,
    nodeExternals(),
  ],
};

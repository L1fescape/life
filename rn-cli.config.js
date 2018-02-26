/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * React Native CLI configuration file
 *
 * @format
 * @flow
 */
'use strict';

const defaultConfig = require('metro/src/rn-cli.config');
const path = require('path')

const root = path.resolve(__dirname)
const blacklist = require('metro/src/blacklist')

module.exports = Object.assign({}, defaultConfig, {
  getProjectRoots: () => [
    path.resolve(root, 'lib'),
    path.resolve(root, 'node_modules'),
  ],
  extraNodeModules: {
    life: path.resolve(root, 'lib'),
  },
  // https://github.com/oblador/react-native-vector-icons/issues/626#issuecomment-362386341
  getBlacklistRE: () => {
    return blacklist([/react-native\/local-cli\/core\/__fixtures__.*/])
  },
});
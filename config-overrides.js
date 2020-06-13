/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

const {
  override, useEslintRc, addWebpackModuleRule, addBabelPlugin, addWebpackPlugin,
} = require('customize-cra');
const { addReactRefresh } = require('customize-cra-react-refresh');
const StylelintPlugin = require('stylelint-webpack-plugin');

/* config-overrides.js */
module.exports = override(
  addReactRefresh(),
  addBabelPlugin('babel-plugin-react-scoped-css'),
  useEslintRc(),
  addWebpackModuleRule({
    test: /\.scoped.(sc|c|sa)ss$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          importLoaders: 2,
        },
      },
      // You have to put in after `css-loader` and before any `pre-precessing loader`
      { loader: 'scoped-css-loader' },
      {
        loader: 'sass-loader',
      },
    ],
  }),
  addWebpackPlugin(new StylelintPlugin()),
);

const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

const { shouldExclude } = require('tamagui-loader')
const webpack = require('webpack')

const tamaguiOptions = {
  config: './tamagui.config.js',
  components: ['tamagui'],
  importsWhitelist: ['constants.js', 'colors.js'],
  logTimings: true,
  disableExtraction: process.env.NODE_ENV === 'development',
}

const projectRoot = __dirname

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

plugins.push(new webpack.DefinePlugin({
  'process.env.TAMAGUI_TARGET': '"web"',
}))

module.exports = {
  module: {
    rules: [...rules, {
  test: /\.[jt]sx?$/,
      // you'll likely want to adjust this helper function,
      // but it serves as a decent start that you can copy/paste from
      exclude: path => shouldExclude(path, projectRoot, tamaguiOptions),
      use: [
    // optionally thread-loader for significantly faster compile!
    'thread-loader',

    // works nicely alongside esbuild
    {
      loader: 'esbuild-loader',
      options: {
        loader: 'tsx',
        minify: process.env.NODE_ENV === 'production',
      },
    },

    {
      loader: 'tamagui-loader',
      options: tamaguiOptions,
    },
  ]
}],
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      // Resolve react-native to react-native-web
      'react-native$': require.resolve('react-native-web'),
      'react-native-web$': require.resolve('react-native-web'),

      // Experimentally opt into react-native-web-lite which drops support for all react-native
      // built-in List components, and removes many deprecated APIs and code-reduction, slimming
      // bundle sizes down nearly 30-50Kb.

      // @tamagui/rnw exports a couple internal hooks from react-native-web
      // resolve both to CommonJS so they match
      '@tamagui/rnw': require.resolve('@tamagui/rnw'),
      // optional, for svg icons
      'react-native-svg': require.resolve('@tamagui/react-native-svg'),
    }
  },
};

const withPlugins = require('next-compose-plugins');

const withTypescript = require('@zeit/next-typescript');
const withProgressBar = require('next-progressbar');
const withOffline = require('next-offline');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

const {resolve} = require('path');

const {NODE_ENV = 'development'} = process.env;

const nextConfig = {
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
  distDir: '../.next',
  webpack: (config, options) => {
    config.plugins = config.plugins || [];

    if (!options.isServer) {
      config.output.globalObject = 'self';
    }

    if (NODE_ENV === 'development' && !options.isServer) {
      config.watchOptions = {
        ignored: [/\.git[\\/]/, /\.next[\\/]/, /node_modules/],
      };
      config.plugins.push(
        new ForkTsCheckerWebpackPlugin({
          ignoreDiagnostics: [6133, 6196],
          tsconfig: resolve(__dirname, './tsconfig.json'),
          tslint: resolve(__dirname, './tslint.json'),
        }),
      );
    }

    return config;
  },
};

module.exports = withPlugins(
  [[withProgressBar], [withTypescript], [withBundleAnalyzer], [withOffline]],
  nextConfig,
);

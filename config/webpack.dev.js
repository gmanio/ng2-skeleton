/**
 * Created on 2016-11-24.
 * @author: Gman Park
 */

const helpers = require('./helpers');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = function (options) {
    return webpackMerge(commonConfig({env: ENV}), {
        /**
         * Developer tool to enhance debugging
         *
         * See: http://webpack.github.io/docs/configuration.html#devtool
         * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
         */
        devtool: 'cheap-module-source-map',

        output: {
            path: helpers.root('dist'),
            filename: '[name].bundle.js',
            chunkFilename: '[id].chunk.js'
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            // activates HMR

            new webpack.NamedModulesPlugin(),
            // prints more readable module names in the browser console on HMR updates
        ],

        devServer: {
            port: 3000,
            host: '0.0.0.0',
            hot: true,
            inline: true,
            historyApiFallback: true,
            compress: true,
            quiet: true,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            }
        }
    })
}
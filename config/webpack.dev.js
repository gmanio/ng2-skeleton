/**
 * Created on 2016-11-29.
 * @author: Gman Park
 */
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: __dirname + '/dist/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        port: 3000,
        host: '0.0.0.0',
        hot: true,
        inline: true,
        colors: true,
        historyApiFallback: true,
        compress: true,
        quiet: false,
        progress: true
    }
})
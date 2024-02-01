const path = require('path');
const PACKAGE = require('./package.json');
const version = PACKAGE.version;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /.(css|scss|sass)$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|mkv)$/i,
                type: 'asset/inline',
            },
            {
                test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/inline',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            base: process.env.PUBLIC_URL,
            template: path.resolve('./public/index.html'),
            favicon: path.resolve('./public/favicon.ico'),
        }),
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, './build'),
        filename: `marvel-zara-challenge-v${version}.js`,
        clean: true,
    },
};

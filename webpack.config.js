const path = require('path');
const PACKAGE = require('./package.json');
const version = PACKAGE.version;
const Dotenv = require('dotenv-webpack');
require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development';

    let config = {
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
                base: './',
                template: path.resolve('./public/index.html'),
                favicon: path.resolve('./public/favicon.ico'),
            }),
            new Dotenv({
                path: `./.env${argv.mode ? `.${argv.mode}` : ''}`,
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

    if (isDevelopment) {
        config.devtool = 'source-map';
        config.devServer = {
            static: path.resolve(__dirname, './public'),
            historyApiFallback: true,
        };
    } else {
        config.optimization = {
            minimizer: [new TerserPlugin()],
        };
    }

    return config;
};

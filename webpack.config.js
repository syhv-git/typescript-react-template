'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const isDev = argv.mode === 'development'

    return {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        devtool: isDev ? 'inline-source-map' : 'source-map',
        output: {
            filename: isDev ? 'bundle.js' : 'bundle.min.js',
            chunkFilename: isDev ? '[name].chunk.js' : '[name].[contenthash].chunk.min.js',
            path: path.resolve(__dirname, 'build'),
        },
        devServer: {
            static: {
                directory: path.resolve(__dirname, 'build')
            },
            port: 9000,
            hot: true,
            compress: true,
            open: true,
        },
        module: {
            rules: [
                {
                    test: /\.[jt]sx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: require.resolve('babel-loader'),
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                },
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                    type: 'asset/inline',
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
            }),
            new CleanWebpackPlugin(),
            new CompressionPlugin(),
        ],
    };
};

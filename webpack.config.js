const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
            static: path.resolve(__dirname, 'build/bundle.js'),
            port: 3000,
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
                        loader: 'babel-loader',
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
            alias: {
                '@mui/styled-engine': '@mui/styled-engine-sc',
            },
            extensions: ['.tsx', '.ts', '.js'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
            }),
            new CleanWebpackPlugin(),
        ],
    };
};

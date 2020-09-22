/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const main = [
    './src/index.ts',
    './src/scss/styles.scss',
];

module.exports = {
    context: process.cwd(), // to automatically find tsconfig.json
    entry: {
        main,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
                files: './src/**/*.{ts,tsx,js,jsx}',
            },
        }),
        new ForkTsCheckerNotifierWebpackPlugin({ title: 'TypeScript', excludeWarnings: false }),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: [
                    { loader: 'ts-loader', options: { transpileOnly: true } },
                ],
            },
            {
                test: /\.html$/i,
                use: 'raw-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: 'inline-source-map',
    devServer: {
        clientLogLevel: 'warning',
        open: true,
        historyApiFallback: true,
        stats: 'errors-only',
    },
};

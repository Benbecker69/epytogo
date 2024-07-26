const path = require('path');
const { BundleTracker } = require('webpack-bundle-tracker');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('./dist/bundles/'),
        filename: '[name]-[hash].js',
        publicPath: '/static/bundles/',
    },
    plugins: [
        new BundleTracker({ path: __dirname, filename: 'webpack-stats.json' }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};

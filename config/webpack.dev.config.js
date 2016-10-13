const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const WebpackNotifierPlugin = require('webpack-notifier');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    // This will be our app's entry point (webpack will look for it in the 'src' directory due to the modulesDirectory setting below). Feel free to change as desired.
    entry: [
        // Add the react hot loader entry point - in reality, you only want this in your dev Webpack config
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'index.tsx'
    ],
    // Output the bundled JS to dist/app.js
    output: {
        filename: 'bundle.js',
        publicPath: '/dist',
        path: path.resolve('dist')
    },
    resolve: {
        // Look for modules in .ts(x) files first, then .js(x)
        extensions: ['', '.ts', '.tsx', '.js', '.jsx', '.scss', '.css', '.json'],
        // Add 'src' to our modulesDirectories, as all our app code will live in there, so Webpack should look in there for modules
        modulesDirectories: ['src', 'node_modules'],
    },
    module: {
        loaders: [
            // .ts(x) files should first pass through the Typescript loader, and then through babel
            {
                test: /\.tsx?$/,
                loaders: ['babel', 'ts-loader']
            },
            {
                test: /(\.scss|\.css)$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css', { allChunks: true }),
        new webpack.optimize.OccurenceOrderPlugin(),
        // Add the Webpack HMR plugin so it will notify the browser when the app code changes
        new webpack.HotModuleReplacementPlugin(),
        // Set up the notifier plugin - you can remove this (or set alwaysNotify false) if desired
        new WebpackNotifierPlugin({ alwaysNotify: true }),
        new ProgressBarPlugin()
    ],
    postcss: [autoprefixer],
    sassLoader: {
        data: '@import "src/theme.scss";',
        includePaths: [path.resolve(__dirname, './src')]
    }
};
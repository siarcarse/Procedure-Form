const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const AppCachePlugin = require('appcache-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TARGET = process.env.npm_lifecycle_event; //Capturo variable pasada a NPM (i.e npm START)
process.env.BABEL_ENV = TARGET;


const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

const common = {
    entry: {
        app: PATHS.app
    },
    resolve: {
        extensions: ['', '.jsx', '.js'], // along the way, subsequent file(s) to be consumed by webpack
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js',
        //filename: 'bundle.js',
        chunkFilename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel?cacheDirectory'],
            include: PATHS.app,
            exclude: /node_modules/
        }, {
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: "url-loader?limit=8192&name=/images/[hash].[ext]"
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff&name=/fonts/[hash].[ext]"
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff&name=/fonts/[hash].[ext]"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream&name=/fonts/[hash].[ext]"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file?name=/fonts/[hash].[ext]"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml&name=/fonts/[hash].[ext]"
        }]
    }
};
// Default configuration
if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval-source-map',
        devServer: {
            contentBase: PATHS.build,
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,

            stats: 'errors-only',

            // Parse host and port from env so this is easy to customize.
            host: '0.0.0.0',
            port: process.env.PORT
        },
        module: {
            loaders: [{
                test: /\.(scss|sass)$/,
                loader: TARGET === "build" ? ExtractTextPlugin.extract("sass-loader") : "sass-loader",
                include: PATHS.app
            }],
            preLoaders: [{
                test: /\.jsx?$/,
                loaders: ['eslint', 'jscs'],
                include: PATHS.app
            }]
        },
        postcss: [autoprefixer],
        plugins: [
            new ExtractTextPlugin('example.css', { allChunks: true }), // compiled css (single file only)
            new webpack.NoErrorsPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development')
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
            new webpack.HotModuleReplacementPlugin(),
            new NpmInstallPlugin({
                save: true // --save
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: "app",
                minChunks: Infinity,
            })
            /*new ManifestPlugin(),
            new ChunkManifestPlugin({
                filename: "chunk-manifest.json",
                manifestVariable: "webpackManifest"
            }),
            new webpack.optimize.OccurenceOrderPlugin()*/
        ]
    });
}

if (TARGET === 'build') {
    module.exports = merge(common, {
        postcss: [autoprefixer],
        plugins: [
            new ExtractTextPlugin('example.css', { allChunks: false }), // compiled css (single file only)
            new webpack.NoErrorsPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development')
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
            new HtmlWebpackPlugin({
                template: 'node_modules/html-webpack-template/index.ejs',
                title: 'Kanban app',
                appMountId: 'app',
                inject: false,
                mobile: true
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: "app",
                minChunks: Infinity,
            })
            /*new ManifestPlugin(),
            new ChunkManifestPlugin({
                filename: "chunk-manifest.json",
                manifestVariable: "webpackManifest"
            }),
            new webpack.optimize.OccurenceOrderPlugin(),
            new AppCachePlugin({
                settings: ['prefer-online'],
                output: 'my-manifest.appcache'
            })*/
        ]
    });
}

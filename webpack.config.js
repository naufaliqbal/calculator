const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
    entry: './src/index.js',
    resolve: {
        extensions: ['*', '.js', '.vue', '.json'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            scss: path.resolve(__dirname, 'src/scss'),
            modules: path.resolve(__dirname, 'src/store/modules')
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader',
        }, {
            test: /\.(sc|c|sa)ss$/,
            use: [
                'vue-style-loader',
                {
                    loader: MiniCssExtractPlugin.loader
                },
                'css-loader',
                'sass-loader',
                'postcss-loader',
            ]
        }, {
            test: /\.png$/,
            loader: 'file-loader'
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Calculator made with vue',
            template: 'src/template.html',
            favicon: 'src/img/calculator-128.png',
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        }),
        new WebpackPwaManifest({
            short_name: "calculator",
            name: "Calculator",
            fingerprints: false,
            icons: [
                {
                    src: path.resolve('src/img/calculator-128.png'),
                    sizes: [96, 128],
                    destination: path.join('icons', 'ios'),
                },
                {
                    src: path.resolve('src/img/calculator-512.png'),
                    sizes: [256, 384, 512],
                    destination: path.join('icons', 'ios'),
                    ios: 'startup'
                }
            ],
            start_url: "/?utm_source=a2hs",
            background_color: "#FFF",
            display: "standalone",
            scope: "/",
            orientation: "portrait",
            theme_color: "#00000066",
            ios: true,
            inject: true
        })
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
        runtimeChunk: {
            name: entrypoint => `runtime~${entrypoint.name}`
        },
        mangleWasmImports: true,
        removeAvailableModules: true,
        removeEmptyChunks: true,
        mergeDuplicateChunks: true
    },
    devServer: {
        port: 9090
    }
};
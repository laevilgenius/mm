var webpack = require('webpack')
var path = require('path')
var DevServer = require('./devServer')
var ExtractCssPlugin = require("mini-css-extract-plugin")
var VueLoaderPlugin = require('vue-loader/lib/plugin')

var PROD = (process.env.NODE_ENV === 'production')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: PROD ? 'mm.min.js' : 'mm.js',
        // https://github.com/webpack/webpack/issues/3929
        library: undefined,
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    PROD ? ExtractCssPlugin.loader : 'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                        },
                    },
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    PROD ? ExtractCssPlugin.loader : 'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                        },
                    },
                    'sass-loader',
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    PROD ? ExtractCssPlugin.loader : 'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                indentedSyntax: true,
                            },
                        }
                    },
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        overlay: true,
        onBeforeSetupMiddleware({ app }){
            DevServer.registerApi(app)
        }
    },
    performance: {
        hints: false
    },
    devtool: 'eval-source-map',
    optimization: {
        minimize: PROD,
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
}

if (PROD) {
    module.exports.devtool = 'source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new ExtractCssPlugin({filename: 'style.css'}),
    ])
    module.exports.externals = {
        'vue' : 'vue',
        'vuex' : 'vuex',
        'axios' : 'axios',
        'es6-promise/auto': 'es6-promise/auto'
    }
}

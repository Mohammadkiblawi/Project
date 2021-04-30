var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: "",
        filename: "main.js"
    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        port: 1240,
        overlay: true, //for errors
        writeToDisk: true,

    },

    module: {
        rules: [{
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: true,
                },
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.(png|svg|jpe?g|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                }
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: "fonts",
                    }
                }]
            },

        ],

    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "css/style.css"
        }),
        new HtmlWebpackPlugin({
            filename: "tour1.html",
            template: "./src/tour1.html",
        }),
        new HtmlWebpackPlugin({
            filename: "tour2.html",
            template: "./src/tour2.html",
        }),
        new HtmlWebpackPlugin({
            filename: "sign_in.html",
            template: "./src/sign_in.html",
        }),
        new HtmlWebpackPlugin({
            filename: "sign_up.html",
            template: "./src/sign_up.html",
        }),
        new OptimizeCSSAssetsPlugin({}),
    ],


};
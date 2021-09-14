const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")

const isDev = process.env.NODE_ENV !== "production"
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all",
        },
    }
    if (isProd) {
        config.minimizer = [new OptimizeCssAssetsPlugin(), new TerserWebpackPlugin()]
    }
    return config
}

const jsLoaders = () => {
    const loaders = [
        {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
            },
        },
    ]

    if (isDev) {
        loaders.push("eslint-loader")
    }

    return loaders
}

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        main: ["@babel/polyfill", "./app/index.jsx"],
    },
    output: {
        filename: "app/[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    optimization: optimization(),
    devtool: isDev ? "source-map" : false,
    plugins: [
        new HTMLWebpackPlugin({
            template: "public/index.html",
            publicPath: "./",
            filename: "index.html",
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "style/[name].[contenthash].css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    esModule: false,
                },
            },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },

            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            esModule: false,
                            name: "[name].[ext]",
                            outputPath: "public/images",
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            esModule: false,
                            name: "public/fonts/[name].[ext]",
                        },
                    },
                ],
                type: "javascript/auto",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders(),
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
}

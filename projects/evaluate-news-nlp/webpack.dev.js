const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const loader = require('sass-loader')
const WorkboxPlugin = require("workbox-webpack-plugin");



module.exports = {
    output: {
        libraryTarget:'var',
        library:'Client'
    },
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
           ,
       
            {
                test: /\.scss$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            }
           
            ]},
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // for file removal
            dry: true,
            verbose: true,
            // when rebuilding this will remove all unused webpack
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
      
        new MiniCssExtractPlugin({filename:"[name].css"}),
        new WorkboxPlugin.GenerateSW()
    ]
}

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: './src/Index.js',
    output: {
      path: path.resolve(__dirname),
      publicPath: '/dist/',
      filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                  presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin("./src/css/styles.css")
    ]
  }
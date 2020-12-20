const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: './src/Index.tsx',
    output: {
      path: path.resolve(__dirname),
    //   publicPath: '/dist/',
      filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public/'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".scss", "scss"],
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: "babel-loader",
            //     options: {
            //       presets: ['es2015', 'react']
            //     }
            // },
            { test: /\.tsx?$/, loader: "ts-loader" },

            { test: /\.js$/, loader: "source-map-loader" },
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
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin("./src/css/styles.css")
    ]
  }
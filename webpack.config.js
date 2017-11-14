const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/Index.js',
    output: {
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
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader','sass-loader']
                })
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./src/css/styles.css")
    ]
  }
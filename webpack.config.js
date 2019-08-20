var path = require('path');
var webpack = require('webpack');
var copyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    // 设置基础路径
    context: path.resolve(__dirname,'./src'),
    entry: {
        app: './main.js'
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: "bundle.js"
    },
    plugins: [
        new copyWebpackPlugin([
            {
                from: './copy.txt'
            }
        ])
    ]
}

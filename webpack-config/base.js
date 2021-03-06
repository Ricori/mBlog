const HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = process.cwd();

module.exports = {
    entry: ROOT_PATH + "/app/js/main.js",
    plugins:[
        new HtmlwebpackPlugin({
            title: 'mBlog',
            template: ROOT_PATH + '/app/templates/indextp/index.html'
        })
    ],
    module: {
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.html$/,
            loader: 'html-loader',
            options: {minimize: true},
        },{
            test: /\.(jpg|png|gif|svg)$/i,
            loader: 'url-loader',
            options: {
                limit: 8192,
                name: 'images/[hash].[ext]'
            }
        }]
    }
};
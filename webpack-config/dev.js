const webpackMerge = require('webpack-merge');
const base = require('./base');

module.exports = webpackMerge(base, {
    output: {
        path: process.cwd() + '/build',
        filename: "bundle.js"
    },
    devtool: 'eval-source-map',
    plugins: [],
    module: {
        rules:[{
            test: /\.(scss|css)$/,
            use:[
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {sourceMap: true}
                },
                {
                    loader: 'postcss-loader',
                    options: {sourceMap: true}
                },
                {
                    loader: 'sass-loader',
                    options: {sourceMap: true}
                }
            ],
        }]
    }

});
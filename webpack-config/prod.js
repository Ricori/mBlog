const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./base');

module.exports = webpackMerge(base, {
    output: {
        path: process.cwd() + '/build/dist',
        filename: "bundle.[chunkhash].js"
    },
    module: {
        rules:[{
            test: /\.(scss|css)$/,
            use:[
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {minimize: true}
                }
                ,'postcss-loader','sass-loader'
            ],
        }]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({})
    ]
});
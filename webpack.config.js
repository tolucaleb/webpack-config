const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let config;
if(process.env.NODE_ENV == 'development'){
    config = {
        entry: {
            app : ['./js/index']
        },
        output: {
            publicPath: '/',
            filename: '[name]-bundle.js'
        },
        devtool: 'source-map',
        module: {
            rules: [

                {
                    test:/\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader:['react-hot-loader','babel-loader']
                },
                {
                    test:/\.(css|scss|sass)/,
                    loader:'css-loader!postcss-loader!less-loader!sass-loader'
                }
            ]
        },
        devServer: {
            historyApiFallback: true,
            contentBase: './'
        }

    };

}
else{
    config = {
        entry: {
            app : ['./js/index']
        },
        output: {
            path: './public',
            filename: '[name]-bundle.js'
        },
        devtool: 'source-map',
        module: {
            rules: [

                {
                    test:/\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader:['babel-loader']
                },
                {
                    test:/\.(css|scss|sass)/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        loader:'css-loader!postcss-loader!less-loader!sass-loader',
                        options: {sourceMap: true,minimize : true }
                    })
                },
                {
                    test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                    loader: "url-loader?limit=10000&mimetype=application/font-woff"
                }, {
                    test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                    loader: "url-loader?limit=10000&mimetype=application/font-woff"
                }, {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    loader: "url-loader?limit=10000&mimetype=application/octet-stream"
                }, {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    loader: "file-loader"
                }, {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    loader: "url-loader?limit=10000&mimetype=image/svg+xml"
                }

            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new ExtractTextPlugin( "bundle.css"),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp:/\.css$/,
                cssProcessorOptions:{
                    discardComments:{
                        removeAll:true}
                },
                canPrint:true
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: { warnings: false }
            })
        ]
    };

}


module.exports = config;
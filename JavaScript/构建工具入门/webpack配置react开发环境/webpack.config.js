var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 
module.exports = {
    // devtool: "source-map",
    entry:  {  
      vendor: ['react','react-router'],
      bundle: './src/'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "static/js/[name].[hash:20].js",
        // 热更新时需要注释下面一行
        publicPath: "./"
    },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, use: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015'] },
            { test: /\.scss$/, use: ExtractTextPlugin.extract({ fallback: "style-loader", use:"css-loader?minimize=true!sass-loader"})},
            { test: /\.(png|jpg)$/, use: 'url-loader?limit=25000&name=static/img/[name].[ext]' }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin( { filename: 'static/css/style.[hash:20].css'}),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]
};

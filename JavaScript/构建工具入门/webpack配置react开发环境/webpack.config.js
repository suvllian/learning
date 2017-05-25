var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

// 
module.exports = {
    devtool: "source-map",
    entry:  {  
      vendor: [
        'react',
        'react-dom',
        'react-router',
        'redux',
        'react-redux'],
      bundle: './src/'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "static/js/[name].[hash:20].js",
        // 热更新时需要注释下面一行
        // publicPath: "./"
    },
    resolve:{
      extensions:['.js','.jsx']
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

        // 打开浏览器
        new OpenBrowserPlugin({
          url: 'http://localhost:8080'
        }),

        // 定义为生产环境，编译 React 时压缩到最小
        new webpack.DefinePlugin({
          'process.env':{
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),

        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          filename: '[name].[hash:8].js'
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
          __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ]
};

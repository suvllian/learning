var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry:  {  
    vendor: ['react','react-dom'],
    bundle: './src/'
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "static/js/[name].[hash:20].js",
  },
  resolve:{
    extensions:['.js','.jsx']
  },
  module: {
    rules: [
      { test: /\.(jsx|js)?$/, exclude: /node_modules/, use: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015'] },
      { test: /\.(scss|css)$/, use: ExtractTextPlugin.extract({ fallback: "style-loader", use:"css-loader?minimize=true!sass-loader"})},
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
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]
} 
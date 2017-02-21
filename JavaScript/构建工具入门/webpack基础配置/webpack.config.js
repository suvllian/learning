module.exports = {
	entry: './main.js',  // 入口文件

	output:{
		path:__dirname,  // 输出文件保存的路径
		filename:'bundle.js'  // 输出文件的名称
	},

	module:{
		loaders:[
			{ test: /\.css$/, loader: 'style-loader!css-loader'},
			{ test:/\.scss$/, loader:'style!css!sass?sourceMap' }
		]
	},
}
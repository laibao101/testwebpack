const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:{
		app:'./srcs/app.js'
	},
	output:{
		filename:'js/[name].bundle.js',
		path:'./dist'
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'index.bundle.html',
			template:'index.bundle.html',
			inject:'body'
		})
	],
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				query:{
					presets:['es2015']
				},
				exclude:'./node_modules/',
				include:'./srcs/'
			}
		]
	}
}

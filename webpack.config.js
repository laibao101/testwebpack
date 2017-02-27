const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	context:__dirname,
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
				exclude:path.resolve(__dirname,'node_modules'),
				include:path.resolve(__dirname,'srcs')
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.css$/,
				loader:'postcss-loader',
				include:path.resolve(__dirname,'srcs/css'),
				options:{
          plugins: function () {
            return [
              require('autoprefixer')
            ];
          }
				}
			},

		]
	}
}

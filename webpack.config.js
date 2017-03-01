const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

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
		}),
		new webpack.LoaderOptionsPlugin({
			test:/\.css$/,
			options:{
				postcss:function () {
					return [require('autoprefixer')];
				}
			}
		}),
		new webpack.LoaderOptionsPlugin({
			test:/\.scss$/,
			options:{
				postcss:function () {
					return [require('autoprefixer')];
				}
			}
		}),
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
				loader:'style-loader'
			},
			{
				test:/\.css$/,
				loader:'css-loader',
				options:{
					importLoaders:1
				}
			},
			{
				test:/\.scss$/,
				loader:'style-loader!css-loader!postcss-loader!sass-loader'
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
			}


		]
	}
}

var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
	// entry:['./src/script/main.js','./src/script/a.js'],
	entry:{
		main:'./src/script/main.js',
		a:'./src/script/a.js',
		b:'./src/script/b.js',
		c:'./src/script/c.js'
	},
	output:{
		path:'./dist',
		// filename:'[name]-[hash].js'
		filename:'js/[name]-[chunkhash].js',
		publicPath:'http://cnd.com'
	},
	plugins:[
		new htmlWebpackPlugin({
			template:'index.html',
			filename:'a.html',
			title:'this is a.html',
			date:new Date(),
			inject:'body',
			chunks:['main','a'],
			minify:{
				removeComments:true,
				collapseWhitespace:false
			}
		}),
		new htmlWebpackPlugin({
			template:'index.html',
			filename:'b.html',
			title:'this is b.html',
			date:new Date(),
			inject:'body',
			chunks:['main','b'],
			minify:{
				removeComments:true,
				collapseWhitespace:false
			}
		}),
		new htmlWebpackPlugin({
			template:'index.html',
			filename:'c.html',
			title:'this is c.html',
			date:new Date(),
			inject:'body',
			chunks:['main','c'],
			minify:{
				removeComments:true,
				collapseWhitespace:false
			}
		})
	]
}

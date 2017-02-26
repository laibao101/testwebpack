var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
	// entry:['./src/script/main.js','./src/script/a.js'],
	entry:{
		main:'./src/script/main.js',
		a:'./src/script/a.js'
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
			filename:'index.html',
			// inject:'head'
			// inject:'body',
			title:'webpack is good',
			date:new Date(),
			inject:false,
			minify:{
				removeComments:true,
				collapseWhitespace:true
			}
		})
	]
}

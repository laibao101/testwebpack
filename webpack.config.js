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
		filename:'/js/[name]-[chunkhash].js'
	},
	plugins:[
		new htmlWebpackPlugin({
			template:'index.html',
			filename:'index-[hash].html',
			// inject:'head'
			// inject:'body'
		})
	]
}

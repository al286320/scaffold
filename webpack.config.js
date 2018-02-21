const path = require('path');

module.exports = {
	devtool: 'source-map',
	context: path.join(__dirname, 'src'),
	entry:[
		'./main.js'
	],
	output: {
		path: path.join(__dirname, 'public/js'),
		filename: 'bundle.js',
		publicPath: '/public/js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: [
					'babel-loader'
				]
			}
		]
	},
	resolve: {
		modules:[
			path.join(__dirname, 'node_modules')
		]
	}
};
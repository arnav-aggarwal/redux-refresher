const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'app.bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: [/node_modules/],
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	devtool: 'cheap-eval-source-map',
};

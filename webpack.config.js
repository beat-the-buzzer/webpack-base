const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // JS注入html
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 打包的时候，清理原来的文件

const config = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		open: true, // 自动打开
		port: 8081, // 默认8080
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}, 
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['style-loader','css-loader','sass-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new CleanWebpackPlugin()
	],
	devtool: 'inline-source-map'
};

module.exports = config;
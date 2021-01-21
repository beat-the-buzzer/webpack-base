### Webpack从零开始新建一个普通的项目

只需要配置`babel`和`scss`来处理`ES6`和`SCSS`，然后新增项目的本地运行。

第一步：安装相关依赖

```shell
npm init (-y)  # 得到package.json
npm install webpack webpack-cli -D # 安装webpack相关
npm install babel-core babel-loader@7 babel-preset-env -D # 安装babel相关 
npm install -g node-sass # 前提
npm install -D sass-loader css-loader style-loader
npm install -D node-sass # 安装css相关
npm install -D webpack-dev-server # 本地运行

npm install -D html-webpack-plugin # html引用文件
npm install -D clean-webpack-plugin # 清理文件
```

第二步：新建并编辑配置文件`webpack.config.js`

```js
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
			}, {
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
```

第三步：从上面配置的入口文件写代码

第四步：在`package.json`里面新增命令

```json
"scripts": {
  "build": "webpack -w",
  "start": "webpack-dev-server --config webpack.config.js"
}
```

第五步：新建一个入口的html文件，引用output生成的文件
### Webpack从零开始新建一个普通的项目

只需要配置`babel`和`scss`来处理`ES6`和`SCSS`

第一步：安装相关依赖

	npm init (-y)  // 得到package.json
	npm install webpack webpack-cli -D // 安装webpack相关
	npm install babel-core babel-loader@7 babel-preset-env -D // 安装babel相关 
	npm install -g node-sass //前提
	npm install -D sass-loader css-loader style-loader
	npm install -D node-sass //安装css相关

第二步：新建并编辑配置文件`webpack.config.js`

	const path = require('path');

	const config = {
	  mode: 'development',
	  entry: path.resolve(__dirname, 'src/index.js'),
	  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'main.js'
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
	  devtool: 'inline-source-map'
	};

	module.exports = config;

第三步：从上面配置的入口文件写代码

第四步：在`package.json`里面新增命令`webpack -w`

第五步：新建一个入口的html文件，引用output生成的文件

> 做上面这些事，为新建`react`项目做准备。虽然有`create-react-app`脚手架，让我们跳过对`webpack`的学习，但是`webpack`终究还是需要我们去掌握的。从基础做起，稳扎稳打。
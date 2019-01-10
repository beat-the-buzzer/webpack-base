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
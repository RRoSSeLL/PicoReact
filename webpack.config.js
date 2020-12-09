const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = env => ({
  entry: {
    index: './src/jsx/index'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      root: path.resolve(__dirname, 'src'),
      css:  path.resolve(__dirname, 'src/css'),
      jsx:  path.resolve(__dirname, 'src/jsx')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Pico React',
      hash: false,
      filename: 'index.html'
    }),
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [["@babel/preset-react", { "runtime": "automatic" }]],
          plugins: [["@babel/plugin-proposal-class-properties", { "lose": true }]]
        }
      }
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader']
    }]
  },
  devtool: env === 'development' ? 'inline-source-map' : false,
  devServer: {
    compress: true,
    port: 9000
  }
});
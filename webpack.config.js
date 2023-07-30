const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/js/index.js',
  output: {
    filename:  'js/[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  devServer: {
    static: './docs',
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ]
  }
};

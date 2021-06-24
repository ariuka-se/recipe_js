const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require("path");

module.exports={
    entry: './src/js/index.js',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,'dist'),
    },
    
    module: {
        rules: [
          {
            test: /\.m?js$/,
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
      },
    plugins: [
      new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    devServer:{
        contentBase: 'dist',
    }
}
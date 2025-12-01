const path = require('path')

module.exports = {
  entry : {
    appRoot: './src/es6/appRoot.js',
    basicLayout: './src/es6/basicLayout.js',
    barbaLayout: './src/es6/barbaLayout.js',
    homePage: './src/es6/homePage.js',
    contactPage: './src/es6/contactPage.js',
    indexPage: './src/es6/indexPage.js',
    archiPage: './src/es6/archiPage.js',
    detailPage: './src/es6/detailPage.js',
  },
  output : {
    path : path.resolve(__dirname,'public/js'),
    filename : '[name].bundle.js'
  },
  // mode : 'development'
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader', 'sass-loader'] ,
      }
    ]
  }
}

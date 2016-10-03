const path = require('path')

module.exports = {
  entry: `${path.join(__dirname, '../example')}/webpack/script.js`,

  output: {
    path: path.resolve(__dirname, '../example/webpack/'),
    filename: 'build.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
    ],
  },

  resolve: {
    extensions: ['', '.js']
  }
}

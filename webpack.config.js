module.exports = {
  entry: './example/script.js',

  output: {
    path: __dirname,
    filename: "./example/build.js"
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

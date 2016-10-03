'use strict'

const path = require('path')
const browserSync = require('browser-sync')

browserSync({
  server: path.resolve(__dirname, '../'),
  startPath: '/example'
})

browserSync.watch(path.resolve(__dirname, '../example/**/*')).on('change', () => {
  browserSync.reload()
})

'use strict'

const browserSync = require('browser-sync')

const server = done => {
  browserSync.init({
    ui: false,
    server: {
      baseDir: 'dist/'
    },
    port: 3000,
    startPath: '/',
    open: true
  }, done)
}

module.exports = server
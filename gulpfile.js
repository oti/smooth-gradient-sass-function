'use strict'

const gulp = require('gulp')
const server = require('./task/server')
const html = require('./task/html')
const style = require('./task/style')

// watch
const watch = done => {
  gulp.watch(['src/html/**/*.pug'], gulp.parallel(html))
  gulp.watch(['src/style/**/*.scss'], gulp.parallel(style))
  done()
}

// npx gulp
gulp.task('default', gulp.series(
  html,
  style,
  watch,
  server
))

// npx gulp build
gulp.task('build', gulp.series(
  html,
  style
))

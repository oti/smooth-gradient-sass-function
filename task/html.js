'use strict'

const gulp = require('gulp')
const browserSync = require('browser-sync')
const pug = require('gulp-pug')
const plumber = require('gulp-plumber')

const html = () => {
  return gulp.src(['src/html/**/*.pug', '!src/html/_partial/**.pug'])
    .pipe(plumber())
    .pipe(pug({
      locals: {},
      pretty: true
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({
      stream: true
    }))
}

module.exports = html
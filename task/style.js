'use strict'

const gulp = require('gulp')
const browserSync = require('browser-sync')
const sass = require('gulp-sass')(require('sass'))
const sassGlob = require('gulp-sass-glob')
const autoprefixer = require('gulp-autoprefixer')
const plumber = require('gulp-plumber')

const style = () => {
  return gulp.src('src/style/**/*.scss', {
    sourcemaps: true
  })
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('dist/asset/style', {
      sourcemaps: './sourcemaps'
    }))
    .pipe(browserSync.stream())
}

module.exports = style
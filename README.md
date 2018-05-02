
# Smooth Gradient Sass Function

Inspired by [readymadegogo's Pen](https://codepen.io/readymadegogo/pen/pPLJgR).

## Overview

Output smooth `<color-stop>` token.

```Sass
// `scrim` smoothing
@function scrim-gradient($color: #000, $opacity: 1) {
  $scrim-gradient: (
    // alpha: stop
    1: 0%,
    0.738: 19%,
    0.541: 34%,
    0.382: 47%,
    0.278: 56.5%,
    0.194: 65%,
    0.126: 73%,
    0.075: 80.2%,
    0.042: 86.1%,
    0.021: 91%,
    0.008: 95.2%,
    0.002: 98.2%,
    0: 100%
  );
  @if type-of($color) != color {
    @return null;
  }
  $rgba: "#{red($color)},#{green($color)},#{blue($color)}";
  $color-stops: ();
  @each $key, $value in $scrim-gradient {
    $color-stops: append($color-stops, unquote("rgba(#{$rgba}, #{$key * $opacity}) #{$value}"), "comma");
  }
  @return $color-stops;
}
```

```Sass
// `easeOutSine` smoothing
@function easeOutSine-gradient($color: #000, $opacity: 1) {
  $easeOutSine-gradient: (
    // alpha: stop
    1: 0%,
    0.917: 5.3%,
    0.834: 10.6%,
    0.753: 15.9%,
    0.672: 21.3%,
    0.591: 26.8%,
    0.511: 32.5%,
    0.433: 38.4%,
    0.357: 44.5%,
    0.283: 50.9%,
    0.213: 57.7%,
    0.147: 65%,
    0.089: 72.9%,
    0.042: 81.4%,
    0.011: 90.6%,
    0: 100%
  );
  @if type-of($color) != color {
    @return null;
  }
  $rgba: "#{red($color)},#{green($color)},#{blue($color)}";
  $color-stops: ();
  @each $key, $value in $easeOutSine-gradient {
    $color-stops: append($color-stops, unquote("rgba(#{$rgba}, #{$key * $opacity}) #{$value}"), "comma");
  }
  @return $color-stops;
}
```

## Visual Sample

https://oti.github.io/smooth-gradient-sass-function/test/

## Usage

### from git

1) git clone and move to your project.

```shell
git clone git@github.com:oti/smooth-gradient-sass-function.git
mv smooth-gradient-sass-function/src/_smooth-gradient.scss <your project>/<scss dirctory>
```

2) `@import` in your .scss file.

```Sass
// Example
@import '<your scss partial file directory>/smooth-gradient';
```

### from npm

1) npm insatall.

```shell
npm i smooth-gradient-sass-function
```

2) `@import` in your .scss file.

```Sass
// Example
@import '../(to project root)/node_modules/smooth-gradient-sass-function/src/smooth-gradient';
```

### write function

3) write `scrim-gradient()` sass function and argument in argument of native `linear-gradient()` function.

```Sass
// Example
.box {
  background-image: linear-gradient(to bottom, scrim-gradient()); // default color is `#000`, start opacity is `1`
}
```

## Any angel, Any color, Any opacity

```
.box {
  background-image: linear-gradient(to right, scrim-gradient()); // start left
}
```
```
.box {
  background-image: linear-gradient(45deg, scrim-gradient()); // start left bottom
}
```
```
.box {
  background-image: linear-gradient(to bottom, scrim-gradient(#ff9900)); // 1st arg is start color code(default: #000)
}
```
```
.box {
  background-image: linear-gradient(to bottom, scrim-gradient(#ff9900, 0.5)); // 2nd arg is start opacity(default: 1)
}
```


## LICENSE

[MIT license Copyright (c) 2018 oti](LICENSE.txt)

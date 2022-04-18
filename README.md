# Smooth Gradient Sass Function

<https://smooth-gradient-sass-function.dskd.jp/>

Inspired by [Naoki Matsuda's Pen](https://codepen.io/readymadegogo/pen/pPLJgR) & [Lukas Hermann's Pen](https://codepen.io/lhermann/pen/qmpMGQ).

[![Netlify Status](https://api.netlify.com/api/v1/badges/1e62fa99-883c-46bc-8bb2-948a81953597/deploy-status)](https://app.netlify.com/sites/smooth-gradient-sass-function/deploys)

- **v3.x is compatible to dart-sass.**
- [v2.x](./tree/v2.1.0) is compatible to libsass(node-sass).

## You can get smooth gradient sass function

Gradients are scrim, easeOutSine, and clothoid curve.

```scss
// `scrim` smoothing
@function scrim($color: #000000, $opacity: 1, $start: 0, $end: 100%) {
  // validate arguments
  // ...

  $scrim: (
    1: 0,
    0.738: 0.19,
    0.541: 0.34,
    0.382: 0.47,
    0.278: 0.565,
    0.194: 0.65,
    0.126: 0.73,
    0.075: 0.802,
    0.042: 0.861,
    0.021: 0.91,
    0.008: 0.952,
    0.002: 0.982,
    0: 1,
  );
  @return _make-gradient-list($scrim, $color, $opacity, $start, $end);
}

@function _make-gradient-list($map, $color, $opacity, $start, $end) {
  $color-stops: ();
  @each $key, $mod in $map {
    $position: $mod * ($end - $start) + $start;
    $new-stop: color.change($color, $alpha: $key * $opacity);
    $color-stops: list.append($color-stops, $new-stop $position, "comma");
  }
  @return $color-stops;
}
```

```scss
// `easeOutSine` smoothing
@function easeOutSine($color: #000000, $opacity: 1, $start: 0, $end: 100%) {
  // validate arguments
  // ...

  $easeOutSine: (
    1: 0,
    0.917: 0.053,
    0.834: 0.106,
    0.753: 0.159,
    0.672: 0.213,
    0.591: 0.268,
    0.511: 0.325,
    0.433: 0.384,
    0.357: 0.445,
    0.283: 0.509,
    0.213: 0.577,
    0.147: 0.65,
    0.089: 0.729,
    0.042: 0.814,
    0.011: 0.906,
    0: 1,
  );
  @return _make-gradient-list($easeOutSine, $color, $opacity, $start, $end);
}
```

```scss
// `clothoid` smoothing
@function clothoid($color: #000000, $opacity: 1, $start: 0, $end: 100%) {
  // validate arguments
  // ...

  $clothoid: (
    1: 0,
    0.3: 0.5,
    0.15: 0.65,
    0.075: 0.755,
    0.037: 0.8285,
    0.019: 0.88,
    0: 1,
  );
  @return _make-gradient-list($clothoid, $color, $opacity, $start, $end);
}
```

## Usage

### from git

1. git clone and move to your project.

```shell
git clone git@github.com:oti/smooth-gradient-sass-function.git
mv smooth-gradient-sass-function/src/_smooth-gradient.scss your/project/scss/path
```

2. `@use` in your .scss file.

```scss
@use "your/project/scss/path/smooth-gradient" as gradients;
```

### from npm

1. npm install.

```shell
npm i smooth-gradient-sass-function
```

2. `@use` in your .scss file.

```scss
@use "../(to project root)/node_modules/smooth-gradient-sass-function" as
  gradients;
```

### write function

3. write `gradients.scrim()` sass function and argument in argument of native `linear-gradient()` function.

```scss
.elem {
  // default color is `#000`, start opacity is `1`
  background-image: linear-gradient(to bottom, gradients.scrim());
}
```

## Any angel, Any color, Any opacity

```scss
.box {
  background-image: linear-gradient(to right, gradients.scrim()); // start left
}
```

```scss
.box {
  background-image: linear-gradient(
    45deg,
    gradients.scrim()
  ); // start left bottom
}
```

```scss
.box {
  background-image: linear-gradient(
    to bottom,
    gradients.scrim(#ff0000)
  ); // 1st arg is start color code(default: #000)
}
```

```scss
.box {
  background-image: linear-gradient(
    to bottom,
    gradients.scrim(#ffff00, 0.5)
  ); // 2nd arg is start opacity(default: 1)
}
```

```scss
.box {
  background-image: linear-gradient(
    to bottom,
    gradients.scrim(#ffff00, 0.5, $start: 50%)
  ); // 3rd arg is start position
}
```

```scss
.box {
  background-image: linear-gradient(
    to bottom,
    gradients.scrim(#ffff00, 0.5, $start: 0, $end: 16em)
  ); // 4th arg is end position
}
```

## LICENSE

[MIT license Copyright (c) 2018 oti](LICENSE.txt)

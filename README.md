<h1 align="center">
  teslaAnimate()
</h1>

<h4 align="center">A barebones sequential fade-in micro-library</h4>

<p align="center">Control opacity, transformX, transformY, and sequential animation</p>

<blockquote align="center">
  Vanilla JS | No dependencies | Prefixes included | IE9+ | 4kb
</blockquote>

## Getting started

### Link to file

```html
<script src="path-to-file/teslaAnimate.js" type="text/javascript" charset="utf-8"></script>
```
### Add class to element to animate

```html
<div class="teslaAnimate">...</div>
```
### Call teslaAnimate()

```html
<script>
   teslaAnimate();
</script>
```
## Default properties

```html
<script>
   teslaAnimate({
      selector: ".teslaAnimate",
      transitionTime: 0.5,
      delay: 1,
      delayIncrement: 0.1,
      translateX: "0",
      translateY: "15px",
      timingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1.0)"
   });
</script>
```

[Demo](https://codepen.io/NicholasDavid/pen/dLrbVM) | © 2019 [Nicholas Humble](http://nhumble.com).

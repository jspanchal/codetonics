---
title: Ultimate pattern of handling every input events in JavaScript
categories: [Javascript]
tags: [Javascript, Pointer Event, Touch Event, Mouse Event, Pen Event]
---

If you’re writing Javascript handlers for touchscreen input, don’t forget other users too.

In my opinion, this is the golden pattern today:

``` javascript
if ('onpointerdown' in window) {
// Bind to Pointer Events: `pointerdown`, `pointerup`, etc
}
else {
// Bind to mouse events: `mousedown`, `mouseup`, etc
if ('ontouchstart' in window) {
// Bind to Touch Events: `touchstart`, `touchend`, etc
}
}
// Bind to keyboard events: `keydown`, `keyup`, etc
// Bind to `click` events
```
 
Pointer Events cover both touch and mouse input (and styli and motion tracking and anything else which can ‘point’) simultaneously,
so where they’re supported we don’t need to bind touch- or mouse- events… but you might want to handle pointerTypes differently.

Always bind some **mouse- events** if pointer events aren’t supported – your touchscreen device may not have a mouse connected,
but other users’ might… and they might want to use it.

Always bind some **keyboard events** (unless it’s a totally non-essential feature for which keyboard input doesn’t make sense) – again,
you may not use a keyboard, but others might.

Always bind some **click events** – every input device has some way of firing them, so if something can be clicked, it’s accessible to all.

Keyboardable and clickable elements need to be on the [tab order](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets).

You can simplify the whole touch/mouse/pointer situation using a Pointer Events polyfill, like [Hand.js](http://handjs.codeplex.com/)
or the one in [Polymer](http://www.polymer-project.org/platform/pointer-events.html) – then just bind pointer events, keyboard events and click.

This is purely about event handling – remember, [you can’t detect a touchscreen](http://www.stucox.com/blog/you-cant-detect-a-touchscreen/) 
but you can ensure you handle one responsibly.

The [HTML5 Rocks Touch And Mouse article](http://www.html5rocks.com/en/mobile/touchandmouse/) is a good read for the nitty gritty on these event models

I did miss something out: IE 10 uses ms- prefixes for pointer events, so you should check this beforehand:

``` javascript
var pointerPrefix = 'onmspointerdown' in window ? 'ms' : '';
if ('on' + pointerPrefix + 'pointerdown' in window) {
var pointerdown = pointerPrefix + 'pointerdown';
// etc
```
 

## Browser support:

This pattern works for every browser & device since the internet was in black & white
Currently only IE 10 & IE 11 will follow the Pointer Events path, but both Blink (Chrome/Opera/Android WebView) and Firefox are rolling out support this year
Most other modern browsers will follow the mouse & touch path.
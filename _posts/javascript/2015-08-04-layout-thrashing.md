---
title: Layout thrashing is killing the performance of your web application
categories: [Javascript]
tags: [Javascript, Layout Thrashing, Performance]
---

Layout Thrashing occurs when Javascript violently writes, then reads, from the DOM, multiple times causing document 
reflows and then web browser has to repaint the web page, which causes significant delay when loading the page.

Depending on the number of reflows/repaints and the complexity of the web page, there is potential to cause significant 
delay when loading the page, especially on low power devices such as mobile phones or tablets.

## What causes Layout Thrashing ?

When the DOM is written to, layout is 'invalidated', and at some point needs to be reflowed. The browser is a lazy guy 
and wait until the end of current operation (or frame) to perform the reflow. But if we ask for a geometric value back 
from the DOM before the current operation (or frame) is complete, the browser has to perform layout early, this is known 
as **'forced synchonous layout'**.

Example :

``` javascript
// Read
var h1 = element1.clientHeight;
// Write (invalidates layout)
element1.style.height = (h1 * 2) + 'px';
// Read (triggers layout)
var h2 = element2.clientHeight;
// Write (invalidates layout)
element2.style.height = (h2 * 2) + 'px';
// Read (triggers layout)
var h3 = element3.clientHeight;
// Write (invalidates layout)
element3.style.height = (h3 * 2) + 'px';
``` 

## How to prevent Layout Thrashing ?

Preventing layout thrashing is simple: write your JavaScript in such a way that the number of times the page has to be 
reflowed is minimised.

In general, be aware of the problem and try to allow the browser to group as many operations as possible without forcing 
a redraw.

Example :

``` javascript
// Read
var h1 = element1.clientHeight;
var h2 = element2.clientHeight;
var h3 = element3.clientHeight;
// Write (invalidates layout)
element1.style.height = (h1 * 2) + 'px';
element2.style.height = (h2 * 2) + 'px';
element3.style.height = (h3 * 2) + 'px';
// Document reflows at end of frame
``` 

## How to detect Layout Thrashing:

The best way to find out if you are causing layout thrashing is to profile your page load. For those unfamiliar with 
programming, to **'profile'** something basically means to measure how long your code takes to execute and to allow you 
to find out which pieces of your code take the longest time.

In Chrome, press *F12* to bring up the *Developer tools*, and then select the *'Timeline'* tab. In the top left is a 
grey circle. Press this button, reload your web page and then press this button again to profile your page.

## What causes the browser to layout?

Do you want to know the properties and functions in the DOM APIs that can cause layout ? There are a quite a few.

### Element

1. clientHeight
2. clientLeft
3. clientTop
4. clientWidth
5. focus
6. getBoundingClientRect
7. getClientRects
8. innerText
9. offsetHeight
10. offsetLeft
11. offsetParent
12. offsetTop
13. offsetWidth
14. outerText
15. scrollByLines
16. scrollByPages
17. scrollHeight
18. scrollIntoView
19. scrollIntoViewIfNeeded
20. scrollLeft
21. scrollTop
22. scrollWidth

### MouseEvent

1. layerX
2. layerY
3. offsetX
4. offsetY

### Window

1. getComputedStyle
2. scrollBy
3. scrollTo
4. scrollX
5. scrollY

### Frame, Document & Image

1. height
2. width
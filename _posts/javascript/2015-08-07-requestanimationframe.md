---
title: requestAnimationFrame - The secret to silky smooth JavaScript animation
categories: [Javascript]
tags: [Javascript, requestAnimationFrame, setTimeout, setInterval]
---

JavaScript animation can be handled a number of ways. If you've ever tried to do it, you'll most likely have used either 
the ```setTimeout()``` or ```setInterval()``` functions to adjust styling every couple milliseconds. 
Another approach creates a loop that changes styling as many times as possible along the animation's time frame. 
The logic of both of these approaches is to throw a large number of animation frames at the browser, 
so that it hopefully renders smooth-looking motion.

Here's a typical example:

``` javascript
function animate() {
    // some magic here
}
setInterval(animate, 1000);
``` 

This piece of code will call the ```animate()``` function once every **1000ms** forever and ever, until at some point 
later the ```clearInterval()``` function is called. An alternative to this code is to use a ```setTimeout()``` function instead, 
this time inside the ```animate()``` function:

``` javascript
function animate() {
    setTimeout(animate, 100);
    // some magic here too
}
animate();
``` 

The single call to the ```animate()``` function kicks off the animation loop, and from then on it will call itself repeatedly every 100ms.

## What's wrong with setTimeout and setInterval?

Well, a few things.

Firstly, ```setTimeout()``` doesn't take into account what else is happening in the browser. 
The page could be hidden behind a tab, hogging your CPU when it doesn't need to, or the animation itself could have been 
scrolled off the page making the update call again unnecessary. 
Chrome does throttle ```setInterval()``` and ```setTimeout()``` to 1fps in hidden tabs, but this isn't to be relied upon for all browsers.

Secondly, ```setTimeout()``` only updates the screen when it wants to, not when the computer is able to. 
That means your poor browser has to juggle redrawing the animation whilst redrawing the whole screen, and if your 
animation frame rate is not in synchronized with the redrawing of your screen, it could take up more processing power. 
That means higher CPU usage and your computer's fan kicking in, or draining the battery on your mobile device.

Another consideration is the animation of multiple elements at once. One way to approach this is to place all animation 
logic in one interval with the understanding that animation calls may be running even though a particular element may 
not require any animation for the current frame. The alternative is to use separate intervals. 
The problem with this approach is that each time you move something on screen, your browser has to repaint the screen. 
This is wasteful!


## requestAnimationFrame to the rescue!

To overcome these efficiency problems, *Mozilla* proposed the ```requestAnimationFrame()``` function, which was later 
adopted and improved by the *WebKit* team It provides a native API for running any type of animation in the browser, 
be it using DOM elements, CSS, canvas, WebGL or anything else.

The ```Window.requestAnimationFrame()``` method tells the browser that you wish to perform an animation and requests 
that the browser call a specified function to update an animation before the next repaint. The method takes as an 
argument a callback to be invoked before the repaint.


## Here's how you use it:

``` javascript
function animate() {
    requestAnimationFrame(animate);
    // more magic here
}
animate();
``` 

Note: Your callback routine must itself call ```requestAnimationFrame()``` if you want to animate another frame at the next repaint.

Great! It's exactly like the ```setTimeout()``` version but with ```requestAnimationFrame()``` instead. Optionally you 
can pass a parameter along to the function that's being called, such as the current element being animated like so: 
```requestAnimationFrame(draw, element);```

It takes a parameter specifying a function to call when it's time to update your animation for the next repaint.

It returns a long integer value, the request id, that uniquely identifies the entry in the callback list. 
This is a non-zero value, but you may not make any other assumptions about its value. You can pass this value to 
```window.cancelAnimationFrame()``` to cancel the refresh callback request.

``` javascript
var animationId = requestAnimationFrame(animation);
window.cancelAnimationFrame(animationId);
``` 

You may have noticed that you don't specify an interval rate here like other two. So how often is the draw function called? 
That all depends on the frame rate of your browser and computer, but typically it's 60fps. The key difference here is 
that you are requesting the browser to draw your animation at the next available opportunity, not at a predetermined interval. 
It has also been hinted that browsers could choose to optimize performance of ```requestAnimationFrame()``` based on load, 
element visibility and battery status.

The other beauty of ```requestAnimationFrame()``` is that it will group all of your animations into a single browser repaint. 
This saves CPU cycles and allows your device to live a longer, happier life.

So if you use ```requestAnimationFrame()``` all your animations should become silky smooth, synced with your GPU and hog 
much less CPU. And if you browse to a new tab, the browser will throttle the animation to a crawl, preventing it from 
taking over your computer whilst you're busy.


## What if I want to set a frame rate?

One glaring problem remaining is this: how do you control the timing of an animation with ```requestAnimationFrame()``` 
if you can't specify the frame rate? here's a technique you can use:

``` javascript
var fps = 30;
function animate() {
    setTimeout(function() {
        requestAnimationFrame(animate);
        // magical code here
    }, 1000 / fps);
}
``` 

By wrapping the ```requestAnimationFrame()``` in a ```setTimeout()``` you get exactly what you want. Your code gets the 
efficiency savings and you can specify a frame rate, up to 60fps.

A more sophisticated technique would be to check the number of milliseconds past since the last draw call and update the 
animation's position based on the time difference. For example:

``` javascript
var time;
function animate() {
    requestAnimationFrame(animate);
    var now = new Date().getTime(),
        dt = now - (time || now);
    time = now;
    // Drawing code goes here... for example updating an 'x' position:
    this.x += 10 * dt; // Increase 'x' by 10 units per millisecond
}
``` 

## Compatibility ?

You can check the browser compatibility list here. There is a possibility that the user is using some ancient version of 
browser and you still want your animation to work.

Here is how :

``` javascript
window.requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();
``` 

use ```window.requestAnimFrame()``` instead of ```requestAnimationFrame()``` in above example and it should work in pretty 
much all the browsers.
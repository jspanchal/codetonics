---
title: Default parameters in JavaScript
categories: [Javascript]
tags: [Javascript, Default Parameters, ES6]
---

Remember we had to do these statements [short circuit statements](http://codetonics.com/javascript/short-circuit-evaluation/) to define default parameter?

``` javascript
function area(l, w) {
    var length = l;
    var width = w || 10;
    return length*width;
}
```

That is a function to calculate area of rectangle/square. If ```w``` is not passed we consider it as a square and set value of width equal to value of length. Yeah that's the best example I can think of right now.

They were okay until the value was of ```w``` is passed as ```0``` and because ```0``` is falsy in JavaScript it will set the value of ```width``` equal to hardcoded value ```10``` instead of ```0``` (actual value). Of course, who needs 0 as a value, so we just ignored this flaw and used the **logic OR** anyway...

Well! there is another way to overcome the above mentioned flaw.

``` javascript
function area(l, w) {
    var length = l;

    var width =  l;
    if(width == undefined)
        var width = 10;

    return length*width;
}
```

This relies on the fact that a parameter omitted at call time is always ```undefined``` and it is a good solution if you have only one parameter to deal with. But what if you have several?

**No more!** In ES6, we can put the default values right in the signature of the functions:

``` javascript
function area(l, w = 10) {
    var length = l;
    var width = w;
    return length*width;
}
```

In the above example if you do not pass value of ```w``` if will default to ```10``` else it will use whatever value
you pass.

Neat naah :-)
---
title: Measuring JavaScript performance with console.time()
categories: ["JavaScript"]
tags: ["JavaScript", "Performance"]
---

Every now and than almost every developer has to deal with optimizing performance critical code. This article will show 
how to use a debugging method, more specifically one for measuring execution times.


## Measuring performance the old way

Here is a simple recursive function written in JavaScript which calculates factorial of a given number.

``` javascript
function factorial(number){
    if(number < 0){
        throw new Error("Number can not be negetive.");
    }    
    if(number % 1 !== 0){
        throw new Error("Number should be an integer.");
    }    
    if(number == 0 || number == 1){
        return 1;
    }    
    return number * factorial(number - 1);
}
```

To measure the performance of the following function, we would have done something like this

``` javascript
var start = new Date().getTime();
console.log(factorial(1000));
var end = new Date().getTime();
console.log(end - start);
```

Note: The `getTime()` method returns the number of milliseconds since midnight of January 1, 1970.

The above method is real simple and works everywhere. But if you are using a modern browser than there is a shorthand method.

> Say hello to console.time()


## Measuring performance the new way

In order to measure the time taken by the factorial function to calculate the factorial, we can use `console.time()` like this.

``` javascript
console.time("Factorial Test");
console.log(factorial(1000));
console.timeEnd("Factorial Test");
``` 

We have now managed to make the code more expressive and slightly shorter than before.
The `console.time()` method starts a timer with name *Factorial Test* and end when the `console.timeEnd()` method is called with 
same name. It halts the times and log how many milliseconds have elapsed.

`console.time()` is a quick way to measure performance when you are optimizing the code and wants to know how much improvement you have made, 
but it is preferred to use the javascript profiler of developer tools provided by modern browsers. These profilers should give 
the most accurate measurement.

## Compatibility

The `console.time()` and `console.timeEnd()` is supported on most of modern browsers starting with Chrome 2, Firefox 10, Safari 4, and Internet Explorer 11. 
Check compatibility on [caniuse](http://caniuse.com/#search=console.time).

Note: Firefox returns the elapsed time in the `console.timeEnd()` call. All the other browsers simply print the result to the developer console, 
the return value of `console.timeEnd()` is undefined.

## Final words

If you need to measure time precisely, neither Date.getTime() nor console.time() will get you far.
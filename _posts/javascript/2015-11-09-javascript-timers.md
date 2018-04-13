---
title: JavaScript Timers
categories: [JavaScript]
tags: [JavaScript, Timers, setTimeout, setInterval]
---

At face value their behavior appears straightforward and predictable. 
However JavaScript’s single threaded nature can cloak these seemingly innocent little features with mystery and intrigue, 
not to mention hidden powers which can be harnessed for the greater good

A block of JavaScript code is generally executed synchronously. But there are some JavaScript native functions called **timers** 
which let us to delay the execution of arbitrary instructions.
 

## What really happens ?

Imagine yourself as a function in a single threaded environment. Its not unlike driving along a single lane highway 
towards a tunnel (the function executor) with a bunch of other functions lined up behind you. There are no other 
threads so there are no overtaking lanes. Just before you reach the invocation tunnel a traffic cop pulls you over and 
informs you that you are the subject of a ```setTimeout()``` call. He asks you to wait for the specified time period. 
Other functions will overtake and get invoked first. After you have sat out the required delay the traffic cop waves you 
on. But you can’t always just pull back into the road to enter the tunnel – you still have to let other functions go 
ahead until there is a break in traffic. This is why even a 1 ms timeout will push a function to the back of the 
invocation queue. The 1 ms delay is by no means certain, in fact 1ms turns out to be the minimum time you will wait.

``` javascript
console.log(1);
setTimeout(function() {console.log(2)},1);
console.log(3);
console.log(4);
console.log(5);
//console logs 1,3,4,5,2
```

## Why is this useful ?

By enforcing a timeout (however small) you remove the function from the current execution queue and hold it back until 
the browser is not busy.

The most obvious benefit is that you can make long running functions defer execution until more urgent routines have 
completed.

```setInterval()```, on the other hand, will fire each callback at precisely the originally designated time, regardless 
of additional delays that may have been experienced by previous callbacks waiting to re-enter the invocation queue.
 
It’s very easy to time events in JavaScript. The two key methods that are used are:

```setInterval()``` – executes a function, over and over again, at specified time intervals

```setTimeout()``` – executes a function, once, after waiting a specified number of milliseconds


### The ```setInterval()``` Method

The ```setInterval()``` function is commonly used to set a delay for functions that are executed again and again, such 
as animations.

The ```setInterval()``` method will wait a specified number of milliseconds, and then execute a specified function, 
and it will continue to execute the function, once at every given time-interval.

#### Syntax

``` javascript
window.setInterval("javascript function", milliseconds);
```

The ```window.setInterval()``` method can be written without the window prefix.

The first parameter of ```setInterval()``` should be a function.

The second parameter indicates the length of the time-intervals between each execution.

#### How to Stop the Execution?

The ```clearInterval()``` method is used to stop further executions of the function specified in the ```setInterval()``` 
method.

#### Syntax

``` javascript
window.clearInterval(intervalVariable)
```

The ```window.clearInterval()``` method can be written without the window prefix.


### The ```setTimeout()``` Method

The ```setTimeout()``` function is commonly used if you wish to have your function called once after the specified delay.

#### Syntax

``` javascript
window.setTimeout("javascript function", milliseconds);
```

The ```window.setTimeout()``` method can be written without the window prefix.

The ```setTimeout()``` method will wait the specified number of milliseconds, and then execute the specified function.

The first parameter of ```setTimeout()``` should be a function.

The second parameter indicates how many milliseconds, from now, you want to execute the first parameter.

#### How to Stop the Execution?

The ```clearTimeout()``` method is used to stop the execution of the function specified in the ```setTimeout()``` method.

#### Syntax

``` javascript
window.clearTimeout(timeoutVariable)
```

The ```window.clearTimeout()``` method can be written without the window prefix.

To be able to use the ```clearTimeout()``` method, you must use a global variable when creating the timeout method:

``` javascript
myVar=setTimeout("javascript function", milliseconds);
```

Then, if the function has not already been executed, you will be able to stop the execution by calling the 
```clearTimeout()``` method.
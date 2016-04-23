---
title: "Fast (and slow) way to append elements in DOM"
categories: "JavaScript"
tags: ["JavaScript", "JQuery", "DOM", "Layout Thrashing"]
---

**JQuery** is a no doubt powerful tool for front-end developers because of the way it makes the task of handling DOM 
easier, but it does not alleviate the responsibility of ensuring that your code is efficient. 
One common pitfall for developers is the method used to append elements to the DOM. 
This subject matters most at a large scale. So for this guide, I am assuming that our task is to append 10,000 divs to 
the body of a HTML page.


## The naive approach

Well, this is the approach most of JQuery developers will use.

``` javascript
for (var i=0; i<10000; i++) {
  $("body").append($("<div />").addClass("test-div"));
}
```

This code produced an average running time of ~1600ms. This means it took over three quarters of a second to append 
these elements to the DOM.

Well, there are a serious problem here - too many reflows and too many jQuery objects. 

Reflow is when the browser needs to process and draw the webpage, and it is one of the most expensive browser processes.
Read more about [Layout Thrashing]("/javascript/layout-thrashing/") here.

One of the easiest ways to improve the performance of your web app is to reduce the number of reflows, and that's what 
we're going to do.


## Fix the reflow problem

We can fix the reflow problem by creating a node that has not yet been added to the DOM. Then we will append our divs 
to this node. And than, we will append that single node to the DOM which will trigger just a single reflow.

``` javascript
var $elementToAppend = $("<div />").addClass("container");
for (var i=0; i<10000; i++) {
    $elementToAppend.append($("<div />").addClass("test-div"));
}
$("body").append($elementToAppend);
```

This is a little bit better. The running time now is ~650ms. 

Still pretty bad since here we're still creating too many jQuery objects. Even though we've solved the reflow problem, 
there is a lot of overhead to create a jQuery object. Of course, for a single object the convenience of jQuery far 
outweighs the minimal performance hit. But if we're dealing with 10,000 elements the inefficiency is more than noticeable.

Let's skip using jQuery altogether and write this in plain JavaScript.

``` javascript
var c = document.createDocumentFragment();
for (var i=0; i<10000; i++) {
    var e = document.createElement("div");
    e.className = "test-div";
    c.appendChild(e);
}
document.body.appendChild(c);
```

This reduced our total running time to ~40ms. And this makes sense because it actually takes jQuery some time to 
create the object. 

Let's see just how long it takes to create a single jQuery object vs. creating the element using vanilla JavaScript.

``` javascript
console.time("jquery div");
var jqDiv = $("<div />");
console.timeEnd("jquery div");
// jquery div: 0.272ms

console.time("js div");
var jsDiv = document.createElement("div");
console.timeEnd("js div");
// js div: 0.006ms
```

This is a significant difference - 0.02ms vs. 0.26ms. The point of this comparison isn't to say that jQuery is bad but 
rather that as a developer you should know when to use it and when not to. jQuery provides a lot of functionality that 
isn't necessary for our purpose so it doesn't make sense to create 10,000 jQuery objects at such a high cost.


## Using strings instead of nodes

We don't actually have to create 10,000 nodes. Instead we can see what happens when we use one long string of HTML.

``` javascript
var s = "";
for (var i=0; i<10000; i++) {
    s += "<div class=\"test-div\"></div>";
}
$("BODY").append(s);
```

At ~90ms this performs much better than our original, but not quite as well as the pure JavaScript version. However, 
there is one small improvement we can make. String concatenation is expensive, especially at this scale. Let's use an 
array of strings and join them in the end.

``` javascript
var a = [];
for (var i=0; i<10000; i++) {
    a.push("<div class=\"test-div\"></div>");
}
$("BODY").append(a.join(""));
```

This runs in ~90ms. This probably isn't enough of an improvement to stress out about, but since it's faster we'll 
keep it.

Let's measure the cost of using jQuery to append the string. As we learned in the previous step, using pure JavaScript may be faster.

``` javascript
var a = [];
for (var i=0; i<10000; i++) {
    a.push("<div class=\"test-div\"></div>");
}
document.body.innerHTML = a.join("");
```

The main difference here is that we're not using jQuery.append. Instead we're setting the innerHTML attribute on the 
body to our string of HTML. This runs in ~40ms so the improvement is obvious. But we're still not as fast as the 
pure JavaScript version from the last step.


## Conclusion

In summary, the fastest code was the pure JavaScript version:

``` javascript
var c = document.createDocumentFragment();
for (var i=0; i<10000; i++) {
    var e = document.createElement("div");
    e.className = "test-div";
    c.appendChild(e);
}
document.body.appendChild(c);
```

Based on these experiments there are two major takeaways.

First, be aware of which operations will cause a reflow. This is an expensive process, and it should be reduced as much 
as possible.

Second, be aware of the cost of using jQuery. For operations at a low scale, the convenience of jQuery will often 
outweigh the performance cost. But at a large scale, jQuery should be avoided unless it is actually needed.
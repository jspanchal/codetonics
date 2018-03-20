---
title: "Detect if document is ready in pure Javascript"
categories: ["Javascript"]
tags: ["Javascript", "Tips", "JQuery", "Performance"]
---

While JavaScript does provide the ```load``` event for executing code when a page is rendered, this event does not get
triggered until all assets such as images have been completely received.

In most cases, the script can be run as soon as the DOM hierarchy has been fully constructed.

**JQuery** came up with a great solution [```$(document).ready(function(){});```](https://api.jquery.com/ready/). The anonymous function passed as
parameter in ```ready()``` function is executed once as soon as the document is ready.

**But what if you are not using JQuery in your project?** Here is a little JS tip to detect the ready state of document
in pure JavaScript.

You can detect if document is ready in three ways, sorted by preference

## 1. Listening for DOMContentLoaded

```javascript
document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM is ready.')
});
```

The ```DOMContentLoaded``` event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, frame etc. to finish loading. This is equivalent to the ```document.readyState``` being ```interactive```.

Read more about ```DOMContentLoaded``` event on [MDN](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)

## 2. Using ```onreadystatechange```

The another cross-browser way to check if the document has loaded in pure JavaScript is listening to ```onreadystatechange``` event.

```javascript
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    console.log('DOM is ready.')
  }
};
```

At any given time the document is in one of the following **readyState**:

1. ```loading``` — the document is still loading

2. ```interactive``` — the document has been parsed and has finished loading, but sub-resources such as images, stylesheets and frames are still loading

3. ```complete``` — the document and all sub-resources have finished loading, and the load event is about to fire

**Tip:** Use ```document.readyState === "complete"``` to detect when the page is fully loaded i.e stylesheets, images, frames etc.

Read more about ```onreadystatechange``` on [MDN](https://developer.mozilla.org/en/docs/web/api/document/readystate)

## 3. Using JavaScript Timer

```javascript
var checkReadyState = setInterval(() => {
  if (document.readyState === "interactive") {
    clearInterval(checkReadyState)
    console.log('DOM is ready.')
  }
}, 100)
```

The above snippet of code checks for document ready state in interval of 100ms. Well not a preferred method since the callback could wait up to the frequency of the interval to get fire.

## So What is the ultimate way of detecting if document is ready in JavaScript?

While the first method is the best way, it has two drawbacks. **First** it works only on modern browsers and **Second** your callback may not get called if the event is already fired. So how you can solve this issue? Well we are going to do exactly how jQuery does it. JQuery checks for document's ```readySate``` if it is ```complete``` or ```interactive``` or not ```loading``` then it executes the callback anyway.

Here our full implementation

```javascript
function ready(callbackFunction){
  if(document.readyState != 'loading')
    callbackFunction(event)
  else
    document.addEventListener("DOMContentLoaded", callbackFunction)
}
ready(event => {
  console.log('DOM is ready.')
})
```

**Tip:** The ```ready()``` method should not be used together with ```<body onload="">```.
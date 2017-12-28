---
title: "Detect if document is ready in pure Javascript"
categories: ["Javascript"]
tags: ["Javascript", "Tips", "JQuery", "Performance"]
---

While JavaScript provides the ```load``` event for executing code when a page is rendered, this event does not get
triggered until all assets such as images have been completely received.

In most cases, the script can be run as soon as the DOM hierarchy has been fully constructed.

**JQuery** come up with a great solution [```$(document).ready(function(){});```](https://api.jquery.com/ready/). The anonymous function passed as
parameter in ```ready()``` function is executed once as soon as the document is ready.

**But what if you are not using JQuery in your project?** Here is a little JS tip to detect the ready state of document
in pure Javascript.

You can detect document ready in three ways, sorted by preference

## 1. Listening for DOMContentLoaded

```javascript
document.addEventListener("DOMContentLoaded", function(event){
    console.log("DOM fully loaded and parsed");
});
```

The ```DOMContentLoaded``` event is fired when the initial HTML document has been completely loaded and parsed, 
without waiting for stylesheets, images, frame etc. to finish loading. 

Read more about ```DOMContentLoaded``` event on [MDN](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)


## 2. Using ```onreadystatechange```

The another cross-browser way to check if the document has loaded in pure JavaScript is using ```readyState```.

```javascript
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    // document is ready
  }
};
```

**Tip:** Use ```document.readyState === "complete"``` to detect when the page is fully loaded i.e stylesheets, images, 
frames etc.

Read more about ```onreadystatechange``` on [MDN](https://developer.mozilla.org/en/docs/web/api/document/readystate)


## 3. Using Timer

```javascript
var checkReadyState = setInterval(() => {
  if (document.readyState === "interactive") {
    clearInterval(checkReadyState);
    // document is ready
  }
}, 100);
```

The above snippet of code checks for document ready state in interval of 100ms. Well not a preferred method since 
the callback could wait up to the frequency of the interval to get fire. 

**Tip:** The ```ready()``` method should not be used together with ```<body onload="">```.


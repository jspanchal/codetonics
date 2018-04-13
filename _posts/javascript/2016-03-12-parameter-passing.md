---
title: "Parameter passing in JavaScript"
categories: ["JavaScript"]
tags: ["JavaScript", "Tips", "Parameters"]
---

In JavaScript, we have functions and arguments that we pass into those functions. But how JavaScript
handles what you are passing is little tricky.

> Technically JavaScript only passes by value for both primitives type and object (reference) types of variables.
In case of reference types, the reference value itself is passed by value.


When passing in a primitive type variable like a string or number, the value is passed in by value.
This means that any change made to that variable inside the function will be completely separate 
from anything that happens outside the function. Here is an example:

```javascript
var siteName = "Codetonics";
function ChangeVariable(name){
    name = "Jayesh Panchal"
}
console.log(siteName);      // output: "Codetonics"
ChangeVariable(siteName);
console.log(siteName);      // output: "Codetonics"
```


Passing in an object, however, passes it in by reference. Here are few snippets to explain this.

## Snippet - 1

```javascript
var object = {"Site Name" : "Codetonics"};
function ChangeObject(obj){
    obj = {"Author Name" : "Jayesh Panchal"};
}
ChangeObject(object);
console.log(object);
// {"Site Name" : "Codetonics"}
```

In above example, when we the function ```ChangeObject()``` gets invokes, JavaScript is passing 
the reference to ````object``` as value, as it is an object and invocation itself creates two 
independent reference to the **same object**.

When we assign a new object to ```object```, we are changing the reference value entirely and it 
will not have any impact on the original object outside this function scope i.e. the reference 
in the outside scope is going to retain the original object.


## Snippet - 2

```javascript
var object = {"Site Name" : "Codetonics"};
function ChangeObject(obj){
    obj.siteName = "Jayesh Panchal's Blog"; 
}
ChangeObject(object);
console.log(object);
// {"Site Name" : "Jayesh Panchal's Blog"}
```

In this case, inside the function ```ChangeObject()```, we are not assigning the ```obj``` variable to 
any new object. That means the object reference value withing the ```ChangeObject``` function scope 
still is the original object's reference value and when we are changing the value of ```Site Name``` 
property, it is modifying the original object's property.

The prove **JavaScript passes the reference as value, in case of objects**.

**Note:** In JavaScript a primitive value is a member of one of the following built-in types: Undefined, Null, Boolean, Number, and 
String; an object is a member of the remaining built-in type Object; and a method is a function associated with an 
object via a property.
---
title: Battle between Slice and Splice in JavaScript
categories: [JavaScript]
tags: [JavaScript, Array, Slice, Splice]
---

Every once in a while one needs to play with part of an array and almost always end up looking for the difference between ```slice()``` and ```splice()``` first.
Let's clear the confustion between ```slice``` and ```splice``` in JavaScript.


## Array.prototype.slice

The ```slice``` method returns **a new array** with a copied slice from the original array.

```slice``` takes two optional parameters. The first is the beginning index and the second is the ending index. Well as I said both are optional, so if you don't pass any parameter, you get a copy of original array.

```javascript
const originalArray = ['foo', 'bar', 'tuna', 'john', 'doe'];
const copiedArray = originalArray.slice();
console.log(copiedArray); // ['foo', 'bar', 'tuna', 'john', 'doe']
```

if you provide one argument, you get copy of the original array from the specified index to the end of the array.

```javascript
const originalArray = ['foo', 'bar', 'tuna', 'john', 'doe'];
const copiedArray = originalArray.slice(2);
console.log(copiedArray); // ['tuna', 'john', 'doe'];
```

The beginning index can also be negative, in that case the starting index is calculated from the end of the array.

```javascript
const originalArray = ['foo', 'bar', 'tuna', 'john', 'doe'];
const copiedArray = originalArray.slice(-2);
console.log(copiedArray); // ['john', 'doe']
```

Here is an example with both the parameters.

```javascript
const originalArray = ['foo', 'bar', 'tuna', 'john', 'doe'];
const copiedArray = originalArray.slice(1, 3);
console.log(copiedArray); // ['bar', 'tuna'];
```


## Array.prototype.splice

The ```splice``` method mutates the content of the array and used to add or remove items from the array.

When only first parameter is provided, all the items after the provided starting index are removed from the original array and returns the removed items.

```javascript
const originalArray = ['foo', 'bar', 'tuna', 'john', 'doe'];
const copiedArray = originalArray.splice(2);
console.log(copiedArray); // ['tuna', 'john', 'doe'];
console.log(originalArray); // ['foo', 'bar']
```

The second parameter is for the number of items to remove from the original array.

```javascript
const originalArray = ['foo', 'bar', 'tuna', 'john', 'doe'];
const copiedArray = originalArray.splice(2, 1);
console.log(copiedArray); // ['tuna'];
console.log(originalArray); // ['foo', 'bar', 'john', 'doe']
```

You can also add items to the array using ```splice```. You can pass any number of additional parameters after the second parameter which will be added to the array.

```javascript
const originalArray = ['foo', 'bar', 'tuna'];
const copiedArray = originalArray.splice(1, 0, 'john', 'doe');
console.log(copiedArray); // ['tuna'];
console.log(originalArray); // [ 'foo', 'john', 'doe', 'bar', 'tuna' ]
```


> ```slice``` is immutable while  ```splice``` mutates the array.


In simple words ```splice()``` changes/mutates the original array where as ```slice()``` doesn't and infact returns a new one. If you want to add items than only ```splice``` can do that between these two.

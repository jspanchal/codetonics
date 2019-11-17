---
title: Async And Await in JavaScript
categories: [JavaScript]
tags: [JavaScript, Async, Await, Promise, Callback]
cover: image/async-await-cover.jpeg
---

There was a time asynchronous JavaScript was difficult. We used callbacks long enough, then came promises and now we have 
asynchronous functions.

Asynchronous functions make it easier to write asynchronous JavaScript. This article has everything about asynchronous 
functions you need to know.

## Asynchronous Functions in JavaScript

An asynchronous function contains ```async``` keywords, rest is just like a normal function.

```javascript
const anAsyncFunction = async (arguments) => {
    // Do something asynchronously here
};
```

Asynchronous functions returns promises. It doesn't matter what you return from the function, the returned value will 
always be a promise.

```javascript
const incrementByOne = async (a) => {
    return a+1;
};

const returnedValue = incrementByOne(5); // Promise
```

## Await

When you call a promise, you handle the next step in a ```then``` call like this

```javascript
const incrementByOne = async (a) => {
    return a+1;
};

incrementByOne(5)
    .then(b => {
        console.log(b); // 6
    });
```

This is where the ```await``` keyword comes into picture. The ```await``` lets you wait for the promise to resolve. 
Once the promise gets resolved, it returns the parameter passed into the ```then``` call.

```javascript
const incrementByOne = async (a) => {
    return a+1;
};

const b = await incrementByOne(5);
console.log(b); // 6
```

## Error handling

Well, use ```try catch```

```javascript
const incrementByOne = async (a) => {
    return a+1;
};

const test = async () => {
    try{
        const b = await incrementByOne(5);
        console.log(b); // 6
    } catch(error){
        console.log(error);
    }   
};

test();
```

or since an asynchronous function always returns a promise, you can use ```catch```.

```javascript
const incrementByOne = async (a) => {
    return a+1;
};

const test = async () => {
    const b = await incrementByOne(5)
                        .catch(error => console.log(error));

    console.log(b); // 6
};

test();
```

## Make it parallel

```await``` blocks JavaScript from executing the next line of code until a promise gets resolved. This can slow down the 
code execution when more than one functions can be called in parallel.
The solution to this problem is simple. Don't ```await```. Instead store the returned promise in a variable and await at 
the end when the value is actually required.

Here is how

```javascript
const asyncOne = async () => {
    return 1;
};

const asyncTwo = async () => {
    return 2;
};

const asyncThree = async () => {
    return 3;
};


const test = async () => {
    const promiseOne = asyncOne();
    const promiseTwo = asyncTwo();
    const promiseThree = asyncThree();
    
    const one = await promiseOne;
    const two = await promiseTwo;
    const three = await promiseThree;
};

test();
```

but this may not be ideal, If you ```await``` these three promises in a row, you’ll have to wait for three seconds 
before all three promises get resolved. This is not good because we forced JavaScript to wait two extra seconds before 
doing what we need to do.

Instead if you can fetch all three simultaneously, you will save extra two seconds.

To do that, you just need to store all the promises in an array and use ```Promise.all```.

```javascript
const asyncOne = async () => {
    return 1;
};

const asyncTwo = async () => {
    return 2;
};

const asyncThree = async () => {
    return 3;
};


const test = async () => {
    const promiseArray = [asyncOne(), asyncTwo(), asyncThree()];
   
    const [one, two, three] = await Promise.all(promiseArray);
};

test();
```

Wow, you saved precious time for JavaScript to do other things and also saved a lot of lines in code.

Keep Coding :-)

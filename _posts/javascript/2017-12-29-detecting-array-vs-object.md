---
title: Detecting Array vs Object in JavaScript
categories: [Javascript]
tags: [Javascript, Array, Object, instanceof, Tips]
---

The behaviour of JavaScript can be tricky some times.

Consider the example below.

``` javascript
const getListOfPlayerNames = players => {
    if(players instanceof Object){
        return [players.name];
    }
    else if(players instanceof Array){
        return player.map(player => {
            return player.name;
        })
    }
}
```

This function looks perfect at a glance but it is hiding a **major bug** in it.
Lets test the function by passing an object.

``` javascript
const player = {name: 'Jayesh Panchal'}
console.log(getListOfPlayerNames(player));
// -> ["Jayesh Panchal"]
```

Voila! it is working. Lets try passing an array now.

``` javascript
const players = [{name: 'Jayesh Panchal'}, {name: 'Nikita Panchal'}]
console.log(getListOfPlayerNames(players));
// -> [undefined]
```

Opps! something is definitely wrong here. Instead of returning an array of player names, it is returning an array containing only ```undefined```.

*Checking types in Javascript is well known as a pretty unreliable process.*

The problem here is that our function's array detection logic is reversed.
In JavaScript an ```Array``` is just a special type of ```Object``` and because of that, it is impossible for our ```else if``` to ever be triggered. And since the array we passed in doesn't have a name property, we end up returning an array containing only an ```undefined``` element.

In order to correct this logic we need to work in the other direction, first checking whether the input is of the ```Array``` subtype before proceeding to check whether it is part of the broader ```Object``` type.

``` javascript
const getListOfPlayerNames = players => {
    if(players instanceof Array){
        return player.map(player => {
            return player.name;
        })
    }
    else if(players instanceof Object){
        return [players.name];
    }
}

const player = {name: 'Jayesh Panchal'}
console.log(getListOfPlayerNames(player));
// -> ["Jayesh Panchal"]

const players = [{name: 'Jayesh Panchal'}, {name: 'Nikita Panchal'}]
console.log(getListOfPlayerNames(players));
// -> ["Jayesh Panchal", "Nikita Panchal"]
```

Perfect, isn't it?

This type of error can also occur when trying to detect other types of ```Object``` as well, like ```Date```, ```RegExp```, etc.

The rule is to check for the subtype first, than ```Object``` type.
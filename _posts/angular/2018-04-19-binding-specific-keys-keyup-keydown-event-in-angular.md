---
title: Binding Specific Keys to Keyup and Keydown Events in Angular
categories: [Angular]
tags: [Angular, Angular 2, Angular 4, Angular 5, Routing, Modules, JavaScript, TypeScript, SCSS, SASS, CSS]
---

Binding ```keyup``` or ```keydown``` events in Angular is pretty straight forward.

```xml
<input type="textbox" (keydown)="onKeydown($event)">
```

```javascript
onKeydown($event){
    console.log($event.key); // This will log key which is pressed.
}
```

But most of the time we need to bind some specific key. For example ```backspace``` key.

Here is one way of doing it, which indeed everybody does.

```javascript
onKeydown($event){
    if($event.key == 'Backspace'){
        console.log('Backspace pressed');
    }
}
```

This works fine but here is a better way in Angular to do the job.

Here is how you bind ```keyup``` or ```keydown``` event to some specific key in Angular.

```xml
<input type="textbox" (keydown.backspace)="onBackspaceKeydown($event)">
```

```javascript
onBackspaceKeydown($event){
    console.log('Backspace pressed');
}
```

This is much simpler and cleaner way.

## But what if you want to bind ```keyup``` or ```keydown``` event to some key combination?

For that you combine keys togther to trigger the event only when the key combination is triggered.

Here is how you bind ```control + z``` key combination to ```keydown``` event.

```xml
<input type="textbox" (keydown.control.z)="onControlZPressed($event)">
```
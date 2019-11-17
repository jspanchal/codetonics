---
title: Using Event Emitters in Angular
categories: [Angular]
tags: [Angular, Angular 2, Angular 4, Angular 5, Events, Event Emitter, Output Decorator, JavaScript, TypeScript]
cover: image/event-emitter.png
---

Every once in a while you need a child to communicate with its parent, that is when Angular Event Emitter comes handy.

In Angular, data flows into the component via property bindings and flows out of the component through event bindings.

To make a child component notify its parent about something in an Angular application, you need to create an ```EventEmitter``` and decorate it with ```@Output``` decorator.

Here is how your child component should look like.

```javascript
// child.component.ts
import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
  @Output() propertyChangedEvent = new EventEmitter()
  constructor() { }
  ngOnInit() {
  }
}
```

We have created an ```EventEmitter```. Now its time to emit the event.

```javascript
// child.component.ts
this.propertyChangedEvent.emit('This is the data :-)')
```

Now we need the parent to listen to this event.

Here is how the parent component that contains the child component will look.

```xml
<!-- parent.component.html -->
<app-child (nameChangedEvent)="propertyChanged($event)"></app-child>
```

```javascript
// parent.component.ts
propertyChanged(event){
    console.log(event)
}
```

Angular will subscribe to the ```propertyChanged``` event and call the ```propertyChanged()``` method with the event data when the child component triggers the ```emit()``` method.

**That's cool. But what if you want the child component to pass the data to its grand parent?**

Well that's simple. You need to do same thing. Consider the parent component of the child compoent a child component of the grand parent.
In simple words, you need to create an event emitter in the parent component also and in ```propertyChanged(event)``` method, you need to emit that event.
Something like this.

```javascript
// parent.component.ts
import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {
  @Output() propertyChangedEvent = new EventEmitter()
  constructor() { }
  ngOnInit() {
  }
}

propertyChanged(event){
    this.propertyChangedEvent.emit(event);
}
```

and the grand parent will look like this.

```xml
<!-- grand.parent.component.html -->
<app-parent (nameChangedEvent)="propertyChanged($event)"></app-parent>
```

```javascript
// grand.parent.component.ts
propertyChanged(event){
    console.log(event)
}
```

You need to do this for **Angular Events** because they do not bubble like **Dom Events**. Alternate way of above is using **DOM Events** or **Shared Service**.

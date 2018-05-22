---
title: Create two-way data binding in Angular
categories: [Angular]
tags: [Angular, Angular 2, Angular 4, Angular 5, Angular 6, Component, Data Binding, Two Way Binding, JavaScript, TypeScript]
cover: assets/images/two-way-binding.jpg
---

You must have used ```[(ngModel)]``` and its world-famous “banana in a box” syntax while working with Angular 2 and greater.
Unlike AngularJS, Angular does not provide two way binding by default, which avoids all the digest cycle and watchers issues that AngularJS dealt with. But sometimes, there would be a need for a two way data binding between two components — Parent and its child.

First, let’s dissect the “banana in the box” syntax applied to ngModel. Here is the syntax that we all know about:

``` xml
<input [(ngModel)]="name" type="text">
```
What’s interesting is that the ```[()]``` turns out to be syntactic sugar for the following:

``` xml
<input [ngModel]="name" (ngModelChange)="name=$event" type="text">
```

The above code is definitely more verbose but it makes perfect sense when you think about it. A two-way data-binding is really… **two one-way** data-bindings.

**The real secret that the above code unveils is the use of the ```Change``` suffix.**

Before diving into implementing our own custom two way binding, we should understand the two binding concepts in Angular:
1. Property Binding
2. Event Binding

## Property Binding
When you pass the data property of a component as an attribute within the square brackets ```[]``` to the target element in html, it is called Property Binding.

``` xml
//parent.component.template.html
<child-component [name]=”Codetonics”></child-component>
```

The square bracket ```[]``` tells the angular to evaluate the expression given in the right hand side.
It is a live property, which means when **Parent Component** updates the property ```name``` , **Child Component** will receive the updates.
The property binding here is *one-way*. When **Child Component** updates the property ```name```, **Parent Component** won't know about it. There comes the *Event binding*.

## Event Binding
A parent component can listen to an event raised by its child component by adding the target event within parenthesis ```()``` in the target element. This is called Event Binding.

``` xml
//parent.component.template.html
<child-component (nameChange)=”handleChildNameChange()”> </child-component>
```

**Combining these two will create a two-way binding property in components. The syntax would be ```[()]```, which is popularly called “banana in a box”.**

Let's look at the full code.

## Parent Component

``` javascript
@Component({
 selector: ‘parent-component’,
 template: `
 Parent Component:
 Available amount: {{amount}} 
 <button (click)=”randomName()”>Randomize Name</button>
 <child [(name)]=”name”> </child>
 `,
})
export class ParentComponent {
  name: string = "Codetonics";
  constructor() {
  }
 
  ”randomName(){
    this.name = "Codetonics " + parseInt(Math.random()*100);
  }
}
```

In above code, clicking on **Randomize Name** button of parent component will randomize the name and child component will know it.

## Child Component

``` javascript
@Component({
 selector: ‘child’,
 template: `
 <div>
 Child component:
 <span>Name : {{name}}</span>
 <button (click)=resetName()”>Reset Name</button>
 </div>
 `,
})
export class ChildComponent{
   @Input() name: sring;
   @output() nameChange = new EventEmitter<string>();

   resetName(){
     this.name = "Codetonics";
     this.nameChange.emit(this.name);
   }
}
```

In above code, clicking on **Reset Name** button will reset the name back to **Codetonics** and parent component will know it.

> NOTE: If the property binding name is **"name"**, the event binding name should be exactly **"nameChange"**. Only then angular will recognize "banana in a box" ```[()]``` syntax.
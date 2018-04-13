---
title: Creating custom angular pipes
categories: [Angular]
tags: [Angular, Angular 2, Angular 4, Angular 5, Pipes, Filters, JavaScript, TypeScript]
---

Pipes in Angular 2+ (Filters in Angular 1) are a great way to transform and format data right from your templates. Out of the box you get pipes for dates, currency, percentage and character cases, but you can also define custom pipes.

Let's create a simple Angular Pipe which return reverse of a string.

Create a file ```reverse.pipe.ts``` inside ```pipes``` folder (I like to keep it like that) with following code.

```javascript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'reverse'})
export class ReversePipe implements PipeTransform {
  transform(input: string): string {
      return input.split('').reverse().join('');
  }
}
```

To create custom pipe, Angular provides ```Pipe``` and ```PipeTransform``` interfaces. The custom pipe is decorated  with ```@Pipe``` where we need to define the name of the custom pipe. Every pipe needs to implement ```PipeTransform``` interface. This interface provides ```transform()``` method and we need to override it in the custom pipe class. ```transform()``` method will decide the **input types, number of arguments and its types and output type of the custom pipe**.

To use newly created custom pipe, you need to include it into your app module as a declaration.

```javascript
import { ReversePipe } from './pipes/reverse.pipe.ts';
@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    ...
  ],
  imports: [
    ...
  ],
  providers: [
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Using the pipe in your templates is same as in-built pipes.

```javascript
{ {'jayesh panchal' | reverse}}
```

**Note:** Remove space between opening curly braces

The following code will reverse the string **jayesh panchal** and print it.

## Pipe with additional parameters

You can also define parameters in the pipe.

Here is the modified version of above pipe with parameter which takes prefix and suffix to add to reversed string.

```javascript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'reverse'})
export class ReversePipe implements PipeTransform {
  transform(input: string, prefix: string, suffix: string): string {
      const reverseInput = input.split('').reverse().join('');
      return prefix + reverseInput + suffix;
  }
}
```

To use the modified filter in your template

```javascript
{ {'jayesh panchal' | reverse:'PREFIX':'SUFFIX'}}
```

**Note:** Remove space between opening curly braces

The following code will reverse the string **jayesh panchal** than will add prefix and suffix and print it.
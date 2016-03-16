---
title: "Short-circuit evaluation in JavaScript"
categories: ["Javascript"]
tags: ["Javascript", "Tips"]
---

**Short-circuit** or **Minimal** or **McCarthy** evaulation says, the second argument is executed or 
evaluated only if the first argument does not suffice to determine the value of the expression, 
when the first argument of the AND ```&&``` function evaluates to false, the value must be false, and
when the first argument of the OR ```||``` function evaluates to true, the overall value must be true.
(Source [Wikipedia](https://en.wikipedia.org/wiki/Short-circuit_evaluation))

Well let me explain it in simple language with example.

For ```&&``` if the first operand evaluates to ```false```, the second operand is never evaluated because the result 
would always be false. The ```&&``` operator is commonly used to avoid exceptions when using properties of undefined.

```a && b``` is equivalent to ```a ? b : a```

```javascript
var name = person && person.getName();
```

the above code snippet is equivalent to
 
```javascript
if(person) {
	var name = person.getName();
}
```

 
For ```||``` if the result of the first operand is ```true```, the second operand is never operated.
The ```||``` operator is commonly used for setting default values.

```a || b``` is equivalent to ```a ? a : b```

```javascript
var name = person.name || "John Doe";
```

the above code snippet is equivalent to

```javascript
if(person.name) {
	var name = person.name;
} else {
	var name = "John Doe";
}
```

## Evaluation to the last evaluated operator

There is one detail people often missed about the operators ```&&``` and ```||``` in JavaScript, is that they do not 
return a boolean value (true or false), but the value of the last operand they evaluate.

```javascript
false || null
```

Will return ```null```, and not ```false```. 

Additionally, because of the above mentioned short-circuiting:

```javascript
null && false
```

Will return ```null``` as well and not ```false```.


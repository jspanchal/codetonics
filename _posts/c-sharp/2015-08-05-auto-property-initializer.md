---
title: Auto Property Initializer in C# 6.0
categories: [C-Sharp]
tags: [C-Sharp, Auto-Property]
---

The Auto Property feature was first added to the C# language with the release of C# 3.0 as a part of .NET Framework 3.5 
that allows us to define the property without any backing field, however we still need to use constructors to initialize 
these auto properties to a non-default value.

With the release of C# 6.0, a new feature called Auto Property Initializer allows us to initialize these properties without
a constructor. In C# 6.0, we can now initialize the properties where they are declared.

The following code snippet defines a class Student with one auto property, Name, and a parameterized constructor has been 
defined to initialize this property to some value.

``` CSharp
public class Student
{
    public string Name { get; set; } // auto property - Name //declaration
    public Student() // constructor
    {
        Name = "Codetonics"; //assigment
    }
}
``` 

In C# 6.0, the same code can be rewritten as shown below.

``` CSharp
public class Student
{
    public string Name
    {
       { get; set: } = "Codetonics";
    }
}
``` 

## Getter Only Auto-Properties

Properties can be made read-only by removing the setter accessor. That can be done by having only a get accessor in the 
property implementation. With no setter, immutability is easier to do.

The following code only has a getter accessor.

``` CSharp
public class point
{
    public int x { get; }
    public int y { get; }
}
``` 

To make the set accessor available only to code within the class, we can use the private access modifier. The property 
will appear to be read only when accessed from outside of the defined (where the property is defined with private set accessor) 
class. When the declaration and assignment of the get accessor and set accessor are in a single class, we can easily 
initialize the values using setter accessor in that class.

``` CSharp
public class point
{
    public int x { get; private set;}
    public int y { get; private set;}
}
``` 
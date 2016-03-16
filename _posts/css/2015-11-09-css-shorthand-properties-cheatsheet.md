---
title: CSS shorthand properties cheatsheet 
categories: [CSS]
tags: [CSS, Shorthand Properties]
---

Shorthand properties are CSS properties that let you set the values of several other CSS properties simultaneously.
Use these properties to write concise and readable stylesheet. It also saves time, energy and space.

The popular and most used shorthand properties are given below.


## Background

The syntax for declaring the background properties are as follows:

### Properties:

``` css
element {
    background-color: color || #hex || (rgb / % || 0-255);
    background-image: url(URI);
    background-repeat: repeat || repeat-x || repeat-y || no-repeat;
    background-position: X Y || (top||bottom||center) (left||right||center);
    background-attachment: scroll || fixed;
}
```

all these properties can be combined into one single background shorthand property as follows:

### Shorthand Property:

``` css
element {
    background: #fff url(image.png) no-repeat 20px 100px fixed;
}
```

The default values of all the background properties are as follows:

### Default Property Values:

``` css
element {
    background-color: transparent;
    background-image: none;
    background-repeat: repeat;
    background-position: top left;
    background-attachment: scroll;
}
```


## Font

The syntax for declaring the font properties are as follows:

### Properties:

``` css
element {
    font-style: normal || italic || oblique;
    font-variant: normal || small-caps;
    font-weight: normal || bold || bolder || || lighter || (100-900);
    font-size: (number+unit) || (xx-small - xx-large);
    line-height: normal || (number+unit);
    font-family: name,"more names";
}
```

these properties can be combined into one single font shorthand property as follows:

### Shorthand Property:

``` css
element {
    font: normal normal normal inhert/ normal inherit;
}
```

The default values for the font shorthand property are as follows:

### Default Property Values:

``` css
element {
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    font-size: inherit;
    line-height: normal;
    font-family: inherit;
}
``` 


## Border

The syntax for declaring the border properties are as follows:

### Properties:

``` css
element {
    border-width: number+unit;
    border-style: (numerous);
    border-color: color || #hex || (rgb / % || 0-255);
}
```

these properties can be combined into one single border shorthand property as follows:

### Shorthand Property:

``` css
element {
    border: 4px groove linen;
}
```


## Margin

The syntax for declaring the margin properties are as follows:

### Properties:

``` css
element {
    margin-top: number+unit;
    margin-right: number+unit;
    margin-bottom: number+unit;
    margin-left: number+unit;
}
```

these properties can be combined into one single margin shorthand property as follows:

### Shorthand Property:

``` css
/* top right bottom left */
element {
    margin: auto auto auto auto;
}
```

You may declare your margin with one, two, three, or four values. Here is how:

``` css
/* adds a 10px margin to all four sides */
element {
    margin: 10px;
}
```

``` css
/* adds a 20px margin to top and bottom and a 5px margin to left and right */
element {
    margin: 20px 5px;
}
```

``` css
/* adds a 50px margin to top and a 10px margin to left and right and a 300px margin to bottom */
element {
    margin: 50px 10px 300px;
}
``` 


## List-Style

The syntax for declaring the list-style properties are as follows:

### Properties:

``` css
element {
    list-style-type: (numerous);
    list-style-position: inside || outside;
    list-style-image: url(image.png);
}
```

these properties can be combined into one single list-style shorthand property as follows:

### Shorthand Property:

``` css
element {
    list-style: square inside url(image.png);
}
/* in this particular case if image.png is not available then a square will be provided as secondary */
```

The default values of all the list-style properties are as follows:

### Default Property Values:

``` css
element {
    list-style-type: disc;
    list-style-position: outside;
    list-style-image: none;
}
```
---
title: Supercharge Colors With PostCSS/NextCSS Color() Function
categories: [CSS]
tags: [CSS, color, PostCSS, NextCSS]
cover: image/colors.jpg
---

For the past few months, I have been using PostCSS to create stylesheets.
One of the feature I found very useful and is being used in this blog too is the new ```color()``` function.

The ```color()``` function takes a color and can apply several modifications or adjustments.

Let's start with a very small example:

```css
.main-wrapper {  
  /** syntax */
  color( [ <color> | <hue> ] <color-adjuster>* )   

  /** Example */
  background-color: color(#fff blackness(+10%));
}
```

This takes the white color and add 10% blackness. This is equivalent to

```css
.main-wrapper {  
  background-color: rgb(230, 230, 230);
}
```

So technically max value 255 was reduced by 10%.

With the color function you can now define your base colors and can derive from them using color modifiers and adjusters available.

Let's deep dive into ```color()``` function.


## RGBA Adjuster

```css
/** Syntax */
[red( | green( | blue( | alpha( | a(] ['+' | '-']? [<number> | <percentage>] )
[red( | green( | blue( | alpha( | a(] * <percentage> )

/** Example */
background-color: color(red red(-10%));
background-color: color(red green(+10%));
background-color: color(red blue(100));
background-color: color(red alpha(0.8));
```

With an operator, adjust the red, blue, green or alpha channels of the base color. without an operator, set the red, blue, green or alpha channel of the base color.

```css
/** Syntax */
rgb( ['+' | '-']? [<number> | <percentage>]{3} )  
rgb( ['+' | '-'] <hash-token> )
```

Adjust the base color in the red, green and blue channel simultaneously.


## HSL/HWB Adjuster

```css
/** Syntax */
[hue( | h(] ['+' | '-' | *]? <angle> )
```

The ```hue()``` function set or adjust the hue of the base color.

```css
/** Syntax */
[saturation( | s(] ['+' | '-' | *]? <percentage> )
[lightness( | l(] ['+' | '-' | *]? <percentage> )
[whiteness( | w(] ['+' | '-' | *]? <percentage> )
[blackness( | b(] ['+' | '-' | *]? <percentage> )
```

Adjust the saturation, lightness, whiteness or blackness of the base color.


## Blending Adjuster

To make colors simply lighter or darker, the ```tint()``` and ```shade()``` are the easiest way.

```css
/** Syntax */
tint(<percentage>)
```

Mixes the base color with white.

```css
/** Syntax */
shade(<percentge>)
```

Mixes the base color with black.

```css
/** Syntax */
blend( <color> <percentage> [rgb | hsl | hwb]? )
blenda( <color> <percentage> [rgb | hsl | hwb]? )
```

Mixes the base color with the given color.


## Contrast Adjuster

```css
/** Syntax */
contrast(<percentage>)
```

Find a color that contrasts with the base color sufficiently to satisfy accessibility guideline.

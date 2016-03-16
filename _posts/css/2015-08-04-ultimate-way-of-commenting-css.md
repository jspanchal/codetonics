---
title: Ultimate way of Commenting your CSS code
categories: [CSS]
tags: [CSS, Commenting]
---

Commenting is a small thing, but can have big impact, especially when working on large teams. It doesn't only inform and 
guide fellow developers, it underpins a code quality standard.  
If code is messy and undocumented, it grants permission for other team members to do the same. Quickly your new shiny 
code base begins to turn into that all too familiar tangled hacky mess.

Commenting CSS is critical if you are to inform fellow team members (or even just your future self) why you have written 
code as you have. Besides that clean, consistent formatting also suggests a level of code quality that contributors will 
feel inclined to match.

Code is re-written all the time, and if clever solutions/hacks are not well documented, they can easily be left out.

Let's not do that and learn the way of commenting CSS

## Header

Most of the time when there are number of CSS files in a project, it becomes hard to figure out what one of them actually 
does. There comes the Header Comment.  
I use a brief header comment to title the file and add a sentence or two about what the file does. This is really handy 
for newcomers.

``` css
/**  
 * Codetonics Navigation  
 *  
 * The style for codetonics navigation bar  
 * found on all pages.  
 */  
 .navigation{}  
``` 

## Notes

If it is not 100% clear why a particular rule or line of code is in place, comment it. I generally use footnote technique 
stolen from normalize.css. I find it amazing because you can write comments as long as you want without them getting in 
the way of your code.

In footnote technique of comment basically we the comments are written outside of a block with numbers and a particular 
number is written at the end of line as a reference to comment.

``` css
/**
 * 1. Required for correct positioning
 * 2. Restrict the max width of footer to 1000 pixel
 */
.article {
position: relative; /* 1 */
max-width:1000px;
}
``` 

## Dividers

Most of the time you will have one CSS file which is styling many element on a page i.e. header, navigation, footer, etc.

It is a good idea to clearly split these parts out. Use a standard divider comment to do this. This really makes finding 
things quicker.

``` css
/** Headers
 ---------------------------------------------------------*/
h1{}
h2{}
h3{}
h4{}
h5{}
h6{}

/** Navigation
 ---------------------------------------------------------*/
.navigation ul{}
.navigation ul li{}
.navigation ul li a{}
``` 

## State overrides

This type of comments comes handy when we are overriding default styling. Add @state comment block to indicate that 
styling that follows it will only take affect if certain criteria are met. A 'state' can be screen size, orientation, 
body classes, pseudo classes, state classes, etc.

``` css
/**
* @hover
*/
a:hover { background: red; }
/**
* @active
*/
a:active { background: green; }
/**
* @large screen
*/
@media (min-width: 700px) { font-size: 2em; }
``` 

Besides all the tips try to keep your comments short and self-descriptive.  And it is also important to leave blank lines 
whenever needed to improve the readability.
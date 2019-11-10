---
title: Custom CSS Selectors
categories: [CSS]
tags: [CSS, Selectors, PostCSS, NextCSS]
cover: image/css-selectors.png
---

With PostCSS/NextCSS, you can use custom selectors which may be a future standard feature of CSS.

Repeated selectors can be aliased to a shorter custom selector.

Let's see this example:

```css
/** Define custom selector */
/** Note that it must be prefixed with :-- */
@custom-selector:--headings h1, h2, h3, h4, h5, h6;

/** Using custom selector */
:--headings {
  color: blue;
}
```

This example may not do the justice since it is very small. Let's make it little complicated.

Here is the before

```css
/* Phones */
.logo-text, .page-heading, h1 {
  font-size: 20px;
}

/* Tables */
@media only screen and (min-device-width: 768px){
  .logo-text, .page-heading, h1 {
    font-size: 22px;
  }
}

/* Laptop */
@media only screen and (min-device-width: 1024px){
  .logo-text, .page-heading, h1 {
    font-size: 24px;
  }
}
```

And here is the after

```css
@custom-selector:--titles .logo-text, .page-heading, h1;
/* Phones */
:--titles {
  font-size: 20px;
}

/* Tables */
@media only screen and (min-device-width: 768px){
  :--titles {
    font-size: 22px;
  }
}

/* Laptop */
@media only screen and (min-device-width: 1024px){
  :--titles {
    font-size: 24px;
  }
}
```


---
title: Using SCSS/SASS/LESS to style your angular project
categories: [Angular]
tags: [Angular, Javascript, SCSS, SASS, CSS]
---

Admit it, we all love ```scss/sass/less``` because of its capabilities and wants to use it in all of our projects.
However while working with Angular CLI, the default stylesheet have the ```.css``` extension.

Let's bring ```scss/sass/less``` to an angular project.

There are two main scenarios here.

1. When creating a new Angular CLI project
2. When an Angular CLI project has already been set up

## 1. When creating a new Angular CLI projct

Now this is pretty straight forward. Normally when we run ```ng new my-angular-app```, the app will have stylesheet files with ```.css``` extension by default.
To get the Angular CLI to generate stylesheet files with ```.scss/.sass/.less``` extension is also piece of cake.

Create a new project with ```.scss/.sass/.less``` files for styling with the following command:

```javascript
ng new my-angular-app --style=scss // For .scss
ng new my-angular-app --style=sass // For .sass
ng new my-angular-app --style=less // For .less
```

Any of these command will configure Angular CLI to generate stylesheet files with selected extension.

## 2. When an Aangular CLI project has already been setup

If you already have an Angular CLI project with ```.css``` types of files for stylesheet, converting it to ```.scss/.sass/.less``` type does take a little bit of more work and time. But trust me, it is worth it.

First, you need to tell Angular CLI to start processing ```.scss/.sass/.less``` files and also create future components with ```.scss/.sass/.less``` files by default using following command

```javascript
ng set default.styleExt scss // For .scss
ng set default.styleExt sass // For .sass
ng set default.styleExt less // For .less
```

The above command will make these changes to ```.angular.cli.json``` files

```javascript
// For .scss
"defaults": {
    "styleExt": "scss",
    "component": {
    }
}

// For .sass
"defaults": {
    "styleExt": "sass",
    "component": {
    }
}

// For .less
"defaults": {
    "styleExt": "less",
    "component": {
    }
}
```

Now your angular project is all set to process ```.scss/.sass/.less``` files and also create future stylesheet files with extension you wanted it to.
However, there is one last issue to solve. This won't convert existing ```.css``` stylesheet files. You will need to do the conversion manually.
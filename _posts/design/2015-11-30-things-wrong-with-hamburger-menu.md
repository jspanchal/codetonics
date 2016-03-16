---
title: What is wrong with Hamburger Menu
categories: ["Design"]
tags: ["Design", "UX", "UI", "Navigation"]
---

The idea behind the hamburger menu is that you can use it to hide site navigation on smaller screens, showing it only 
when the user clicks the icon instead of always showing it. This pattern does help preserving precious real estate on 
smaller screens.
 
> The core principles of web navigation is similar to wayfinding in the physical world: clarity, visibility, and obviousness.

Imagine you have headed to airport and all the signs referenced to airport is hidden by default behind a button and you
have to push that button to see them. The chances of getting lost is significantly higher.

Hamburger menu is now widely recognized, but it is doing more harm than good.

In this article I am going to focus on problems with Hamburger menu and why it should be avoided.
Yes, avoided not totally abandoned. There are situations when it will do good.

## Problems with Hamburger Menu

### 1. Low Discoverability

Good navigation should do at least these three things very well:

1. It should allow the user to navigate
2. It should serve as wayfinding, letting the user know where they are
3. It should help the user understand what the product is capable of i.e. where else he can go.
 
If your navigation is not doing these three things, something is wrong.

Hamburger menus are terrible at later two, because the menu is not on the screen. It's not visible.
The point is hiding primary navigation behind anything results in a drop of user interaction with those items.

Plus people need to identify the Hamburger icon as actionable to explorer the hidden menu behind it.

> What is out of sight, is out of mind.

### 2. Clash with Platform Navigation Pattern

In platforms such as iOS, the hamburger menu simply cannot be implemented without clashing with the standard navigation
pattern.
The left navigation bar button would need to reserved for the hamburger icon button but we also need a back icon button 
to allow the user to navigate back.

### 3. Less Efficient

> Tap a hard-to-reach button), wait for an animation, scroll a list while scanning for the item you want, tap again, 
and wait for another animation.

Hell! there is a lot happening.

This pattern introduce navigation friction since it forces people to open the menu and then allowing them to see and 
reach their objective.

Of course I am talking all bad about the hamburger menu, but I am not saying to completely abandon it.
All I want to say is **"use it only when necessary"**.

In article **[Obvious Always Wins](http://www.lukew.com/ff/entry.asp?1945)** by Luke Wroblewski, Product Director at 
Google, gives various before-and-after examples of the failures of apps that switched to hamburger-style navigation and 
the successes of those that switched away from it.
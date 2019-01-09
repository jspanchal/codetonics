---
title: "Design for Fingers and Thumbs"
categories: ["Design"]
tags: ["Design", "UI", "UX"]
cover: image/dart-set-cover.jpg
---

In a dart, hitting the bulls-eye is harder to do than hitting any other part of the board. This is because of small
hit area of bulls-eye. The same principle can also be applied to touch targets on mobile devices.

> **The smaller the target, harder to hit.**

## Problem with small touch targets

Since small touch targets require more accuracy to hit the target. To hit the small target user need to reorient their
finger, from finger pad to finger tip. It slows their movement and forces them to work hard.

Small touch targets leads to touch errors when small touch targets are grouped near to each other since the user's
finger overlap on the neighbouring targets and initiate unintended actions.

While designing an interface for mobile devices, it is better to make the hit area of target bigger so that it is easy
for user to hit.

## But how big?

Let's check what various **mobile platform guidelines** say

1. **Apple's Human Interface Guidelines** recommends a minimum target size of **44dp wide** and **44dp tall**.
2. **Google's Material Design Guidelines** recommends a minimum target size of **48dp wide** and **48dp tall**.
3. **Microsoft's Windows Phone Guidelines** recommends a minimum target size of **34dp wide** and **34dp tall**.

You got the point. While these guidelines give a general measurement for touch targets, are not consistent with each other,
not they are consistent with the actual size of human finger.

## Pixel width of average Index Finger

The average width of the index finger is **16-20mm** for adults. This converts to **45-57dp**, which is way wider than what
most of the guidelines suggests.

When the user hits a target that is **45-57dp** wide with finger pad, the edges of the target is visible which can give
clear visual feedback that they are hitting the desired target.

Of course there are many benefits of using finger sized target, but they are not always practical specially on small
devices where the available screen real state is limited. In case if you can't afford the finger sized targets, stick
with the platform design guidelines.

## Pixel width of average Thumb

The average width of the index finger is **25mm** for adults. This converts to **72dp**.

When the users hits a target that is **72dp** wide with thumb, they get clear visual feedback what they are hitting.
Thumb sized targets are particularly useful for applications where user mostly interact with thumb instead of index
finger.

Most of games require to use thumb size controls since most of the time users play using their thumbs. Thumb sized
target will not require user to remove focus from game to find and controls.

For developers designing for web can look into ```device-pixel-ratio``` property of ```css```

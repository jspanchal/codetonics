---
title: Prebrowsing to supercharge web performance
categories: ["Performance"]
tags: ["Performance", "Web", "Optimization", "Prebrowsing", "Caching"]
---

**"Prebrowsing"** or **"predictive browsing"** is simply loading a file  before browser needs it, to provide a fast and
instant user experience. Of course its not just loading any random file.

The thing is to predict what will be the next action of the user by analysing the behaviour and preload the resources 
required for that action. 

**For example:** if a user came to view the biography of *Tom Cruise*, it is more likely that he will be interested in
the list of *movies* in which he acted.

The modern browsers apply this technique up to some level to improve the performance. Browser analyse the pattern to
predict where user is going to go next, and start **DNS resolution** and **TCP handshake** as soon as user hover over
any link.

We all want our websites to be fast. We optimize images, create CSS sprites, use CDNs, cache aggressively, and gzip 
and minimize static content. We use every trick in the book. Let's take one step ahead. Here are the few techniques to
prebrowsing.


## Prebrowsing Techniques

Techniques to supercharge the web performance.

### 1. DNS Prefetching

DNS is the protocol that converts human readable domains (http://www.codetonics.com) into computer readable IPs
(http://173.194.113.18).

> DNS prefetching is an attempt to resolve domain names before a user tries to follow a link.

This technique is mostly useful when the page have some links to external sites. To improve the speed of redirects,

You can trigger DNS prefectching by inserting a ```link``` element with a ```rel``` of "dns-prefetch", for example:

```html
<link rel="dns-prefetch" href="http://www.jayeshpanchal.com">
```

By adding this tag in out page, we are telling the browser to resolve the IP address of domain name
(http://www.jayeshpanchal.com). It will save the time required to resolve the IP address of the domain name.

#### Situations which might be good candiates to introduce DNS prefetching

1. Resources on different domains hidden behind 301 redirects
2. Resources accessed from JavaScript code
3. Resources for analytics and social sharing which usually come from different domains



### 2. Link/Resource Prefetching

> Link prefetching is a browser mechanism, which utilizes browser's idle time to download or prefetch documents that the
user might visit in the near future.

We can go little bit further and predict that the user will open a specific page next than we 
can instruct the browser to prefect critical resources used by the page ahead of time.

A web page provides a set of prefetching hints to the browser, and after the browser is finished loading the page,
it begins silently prefetching specified documents and stores them in its cache. When the user visits one of the
prefetched documents, it can be served up quickly out of the browser's cache.

You can trigger prefetching by inserting a ```link``` element with a ```rel``` of "prefetch", for example:

```html
<link rel="prefetch" href="assets/css/styles.css">
<link rel="prefetch" href="assets/js/scripts.js">
<link rel="prefetch" href="assets/images/jayeshpanchal.jpeg">
```

If you decide to go with this technique, make sure you only prefect the most important resources, 
and also make sure they are browser cacheable. Generally CSS, JavaScript, Images and Font files 
are good candidates for prefetching.

#### Situations which might be good candiates to introduce prefetching

1. On a login page, since users are usually redirected to a welcome or dashboard page after 
logging in.
2. On each page of a linear questionnaire or survey workflow, where users are visiting 
subsequent pages in a specific order.
3. On a multi-step animation, since you know ahead of time which images are needed on subsequent 
scenes.

### 3. Prerendering

How about going even further and prerendering entire page?

> Prerendering extends the concept of prefetching. Instead of just downloading the top-level resource, it does all of the
work necessary to show the page to the user without actually showing it until the user clicks.

Prerendering behaves somewhat similarly openening a link in background tab.
However, in prerendering, that "background tab" is totally hidden from the user, and when the user clicks, its contents
are seamlessly swapped into the same tab the user was viewing.

You can trigger prerendering by inserting a ```link``` element with a ```rel``` of "prerender", for example:

```html
<link rel="prerender" href="http://codetonics.com/next-article.html">
```

#### Situations which might be good candiates to introduce prerendering

1. Only when we are absolutely sure user will visit that page next.


#### Situations in which prerendering is aborted

There are some situaltions which will cause the abortion of prerendering.

1. The URL initiates a download
2. HTMLAudio or Video in the page
3. POST, PUT, and DELETE XMLHTTPRequests
4. HTTP Authentication
5. HTTPS pages
6. Pages that trigger the malware warning
7. Popup/window creation
8. Detection of high resource utilization
9. Developer Tools is open

## Browser Compatibility

1. [Browser Compatibility for DNS-Prefetch](http://caniuse.com/#feat=link-rel-dns-prefetch)
2. [Browser Compatibility for Prefetch](http://caniuse.com/#feat=link-rel-prefetch)
3. [Browser Compatibility for Prerender](http://caniuse.com/#feat=link-rel-prerender)
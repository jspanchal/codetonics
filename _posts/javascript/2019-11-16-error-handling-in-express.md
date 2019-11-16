---
title: Handling Express Errors Like A Boss
categories: [JavaScript]
tags: [JavaScript, Express, Error Handling]
cover: image/error-cover.png
---

Error handling is a crucial aspect while developing any application for that matter. Since there wasn't enough written 
answers I expected, so I had hard time figuring it out.

This article is kind of all in one article related to error handling aspect of Express framework.

So, Let's begin with synchronous errors.


## Handling synchronous errors in Express

This is simplest, just throw the error in an Express request handler.

```javascript
app.post('/health', (req, res) => {
  throw new Error('Destroyed in sync');
})
```

By default express will handle the error with a default error handler if you don't have a custom error handler. It will
1. Set the status code to 500
2. Send the text response
3. Log the text response in the console


## Handling asynchronous errors in Express

In this case, it is not as simple as just throwing an error. You need to send the error into error handler (default/custom) 
through the ```next``` argument.

```javascript
app.post('/health', async (req, res, next) => {
  return next(new Error('Destroyed asynchronously'));
})
```


## Writing a custom error handler in Express

The default error handler is good for nothing in production err but you can define a custom error handler which you should 
do always. 

Express error handler take in four arguments:
1. error
2. req
3. res
4. next

and it must be placed after all middlewares and routes. eg.

```javascript
app.use(/* .. .*/);
app.get(/* ... */);
app.post(/* ... */);
app.put(/* ... */);
app.delete(/* ... */);

// Place your error handler after everything else
app.use((error, req, res, next) => { /* ... */ });
```

Once you define a custom error handler, express will stop using the default one and use the custom one.

In your custom error handler, you will need to communicate the error with requester. You will need to following:
1. Send a valid HTTP status code
2. Send a valid response stating the error

```javascript
app.use((error, req, res, next) => {
  // Handling Bad request error
  res.status(/* status code */).json(/* error response */);
})
```


## Handling 404 errors in Express

Well, this deserves a separate section just because people tend to forget this all together.
This is fairly simple, just insert a middleware between all routes and the error handler. Here is how

```javascript
app.use(/* ... */);
app.get(/* ... */);
app.post(/* ... */);
app.put(/* ... */);
app.delete(/* ... */);

// 404 middleware
app.user((req, res, next) => {
    const error = new Error('Page Not Found');
    const error.name = 'NOT_FOUND';
    return next(error);
});


// Place your error handler after everything else
app.use((error, req, res, next) => { 
    switch(error.name){
        case 'NOT_FOUND':
            return res.status(404).json({message: 'Not Found'});
        default:
            return res.status(500).json({message: 'Something Went Wrong'});
    }
});
```


## While streaming

Well, this is the case when you will get ```Cannot set headers after they're sent``' error.
This happens because the code ran methods that set response headers more than once in the same handler.
In this case, Express says you should delegate the error to the default express handler. It will send the error and close 
the connection.

```javascript
app.use((error, req, res, next) => {
  // Do this only if you're streaming a response
  if (res.headersSent) {
    return next(error)
  }

  // Rest of the error handlers
})
``` 

Happy error handling :-)

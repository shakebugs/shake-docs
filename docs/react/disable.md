---
id: disable
title: Disable
---
This page is about enabling and disabling your users from using Shake.

## Enable
Call the `Shake.start()` if you want to enable Shake in your application.

Shake will be enabled immediately, which means:
1. Shake can be invoked
1. Shake starts tracking all data

So let's suppose you want to allow Shake to your users, but not to guests. You would do this: 

App.js
```javascript
loggedInSuccessfully = (user) => {
  if (user.type !== "GUEST") {
    Shake.start()
  }
}
```     

## Disable
Call the `Shake.stop()` if you want to disable Shake in your application.
 
Shake will be disabled immediately, which means:
1. Shake can't be invoked any more
1. Shake stops tracking all data

So let's suppose you want to allow Shake to your users, but not to guests. You would do this: 

App.js
```javascript
loggedInSuccessfully = (user) => {
  if (user.type === "GUEST") {
    Shake.stop()
  }
}
```                    

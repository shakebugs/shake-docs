---
id: disabling
title: Disabling
---
This page is about enabling and disabling your users from using Shake.

## Disable
Call the `Shake.stop()` if you want to disable Shake in your application.
 
Shake will be disabled immediately, which means:
1. Shake can't be invoked any more
1. Shake stops tracking all data
1. So let's suppose you want to allow Shake to your users, but not to guests. You would do this: 

App.js
```javascript
loggedInSuccessfully = (user) => {
  if (user.type === "GUEST") {
    Shake.stop()
  }
}
```                    

## Enable
Call the `Shake.start()` if you want to enable Shake in your application.

App.js
```javascript
loggedInSuccessfully = (user) => {
  if (user.type === "ADMIN") {
    Shake.start()
  }
}
```     

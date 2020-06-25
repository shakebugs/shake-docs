---
id: disable
title: Stopping
---
This page is about preventing a segment of your users from using Shake.

## Introduction

For example, maybe you're building a new Airbnb and want hosts to be able to report bugs back to you,
but don't want to show Shake to the guests. You can user enable and disable methods to accomplish that requirement.

## Stopping
Call the `Shake.stop()` if you want to stop Shake in your application.

Shake will be stopped immediately, which means:
1. Shake can't be invoked any more
1. Shake stops tracking all data

So let's suppose you want to allow Shake to your users, but not to guests. You would do this:

```javascript title="App.js"
loggedInSuccessfully = (user) => {
  if (user.type === "GUEST") {
    // highlight-next-line
    Shake.stop()
  }
}
```

## Starting
Call the `Shake.start()` if you want to start Shake in your application.

Shake will be started immediately, which means:
1. Shake can be invoked
1. Shake starts tracking all data

So let's suppose you want to allow Shake to your users, but not to guests. You would do this:

```javascript title="App.js"
loggedInSuccessfully = (user) => {
  if (user.type !== "GUEST") {
    // highlight-next-line
    Shake.start()
  }
}
```

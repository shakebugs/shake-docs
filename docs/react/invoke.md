---
id: invoke
title: Invoke
---
This page describes in detail all the different methods that can be used to invoke the SDK.

## Invoking
The default action by which SDK is manually invoked is when a user shakes their device.

```javascript title="App.js"
Shake.setInvocationEvents([
    ShakeInvocationEvent.SHAKE])
```

You can also choose another action — or more than one — that manually invokes the SDK.

```javascript title="App.js"
Shake.setInvocationEvents([
    ShakeInvocationEvent.SHAKE,
    ShakeInvocationEvent.BUTTON,
    ShakeInvocationEvent.SCREENSHOT])
```

:::important

In order for the `Shake.setInvocationEvents` method to work as intended on Android, 
you first need to call `Shake.stop()` and then `Shake.start()` once you’ve set the desired invocation method.

:::

## Actions
Here’s a list of all available action you can use to show Shake, feel free to use any combination of these:

1. Shake - the default, shaking gesture causes the SDK to pop up.
1. Button - this invocation event will create the floating button on top of your app's UI which users can clearly see at all times. This button can be dragged to a more suitable position.
1. Screenshot - the SDK will be invoked when users make a screenshot while using your app.

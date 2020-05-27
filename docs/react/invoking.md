---
id: invoking
title: Invoking
---
This page describes in detail all the different methods that can be used to invoke the SDK.

## Invoke manually
The default action by which SDK is manually invoked is when a user shakes their device.

App.js
```javascript
Shake.setInvocationEvents([
    ShakeInvocationEvent.SHAKE])
```

You can also choose another action — or more than one — that manually invokes the SDK. Here’s a list of all available ones below, feel free to use any combination of these:

App.js
```javascript
Shake.setInvocationEvents([
    ShakeInvocationEvent.SHAKE,
    ShakeInvocationEvent.BUTTON,
    ShakeInvocationEvent.SCREENSHOT])
```

**Shake**
The default, shaking gesture causes the SDK to pop up.

**Button**
This invocation event will create the floating button on top of your app's UI which users can clearly see at all times. This button can be dragged to a more suitable position.

**Screenshot**
The SDK will be invoked when users make a screenshot while using your app.

:::important

In order for the `Shake.setInvocationEvents` method to work as intended on Android, you first need to call `Shake.stop()` and then `Shake.start()` once you’ve set the desired invocation method.

:::

---
id: invoke
title: Invoke
---
This page describes in detail all the different methods that can be used to invoke the SDK.

## Invoke manually
By default, the SDK is invoked when a user shakes their device. You don't need to code anything.

But if you want to, you can customize that.

Let's look at an example. You want your users to invoke SDK either when
they shake their device, or when they take a screenshot. To do that,
pass one or more `ShakeInvocationEvent` to `Shake.setInvocationEvents()` method.

```javascript title="App.js"
// highlight-start
Shake.setInvocationEvents([
    ShakeInvocationEvent.SHAKE,
    ShakeInvocationEvent.SCREENSHOT])
// highlight-end
```

Here’s a list of all available ones below, feel free to use any combination of these.

```javascript title="App.js"
// highlight-start
ShakeInvocationEvent.SHAKE,
ShakeInvocationEvent.BUTTON,
ShakeInvocationEvent.SCREENSHOT
// highlight-end
```

:::note

In order for the `Shake.setInvocationEvents` method to work as intended on Android,
you first need to call `Shake.stop()` and then `Shake.start()` once you’ve set the desired invocation method.

:::

### Shaking
By default, shaking gesture causes the SDK to pop up.

### Button
This invocation event will create the floating button on top of your app's UI which users can clearly see at all times.
This button can be dragged to a more suitable position.

### Taking a screenshot
The SDK will be invoked when users make a screenshot while using your app.

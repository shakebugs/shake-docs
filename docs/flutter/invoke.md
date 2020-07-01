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
you can use Shake's setInvokeOnScreenshot method:

```dart title="lib/main.dart"
// highlight-start
Shake.setInvokeOnScreenshot(true);
// highlight-end
```

Here’s a list of all available invocation methods below, feel free to use any combination of these.

```dart title="lib/main.dart"
// highlight-start
Shake.setInvokeOnScreenshot(true);
Shake.setShowFloatingReportButton(true);
Shake.setInvokeShakeOnShaking(true);
// highlight-end
```

### Shaking
By default, shaking gesture causes the SDK to pop up.

### Button
This invocation event will create the floating button on top of your app's UI which users can clearly see at all times.
This button can be dragged to a more suitable position.

### Taking a screenshot
The SDK will be invoked when users make a screenshot while using your app.

---
id: invoke
title: Invoke
---
This page describes in detail all the different methods that can be used to invoke the SDK.

## Invoke manually
Shake provides you several methods to invoke SDK.

Let's look at an example. You want your users to invoke SDK either when
they shake their device, or when they take a screenshot. To do that,
call `Shake.setInvokeShakeOnScreenshot(bool)` method like this:

```dart title="lib/main.dart"
// highlight-start
Shake.setInvokeShakeOnScreenshot(true);
Shake.setInvokeShakeOnShakeDeviceEvent(true);
Shake.setShowFloatingReportButton(false);
// highlight-end
```

### Shaking
Shaking gesture causes the SDK to pop up.

### Button
This invocation event will create the floating button on top of your app's UI which users can clearly see at all times.
This button can be dragged to a more suitable position.

### Taking a screenshot
The SDK will be invoked when users make a screenshot while using your app.

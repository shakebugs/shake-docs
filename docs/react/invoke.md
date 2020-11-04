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
set invocation events using following methods.

```javascript title="App.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

const setInvocationEvents = () => {
    // highlight-start
    Shake.setInvokeShakeOnShakeDeviceEvent(true);
    Shake.setInvokeShakeOnScreenshot(true);
    // highlight-end
}
```

Here’s a list of all available ones below, feel free to use any combination of these.

```javascript title="App.js"
// highlight-start
Shake.setInvokeShakeOnShakeDeviceEvent(true);
Shake.setInvokeShakeOnScreenshot(true);
Shake.setShowFloatingReportButton(true);
// highlight-end
```

If you want to check which of these events are enabled:

```javascript title="App.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

const getInvocationActions = async () => {
    // highlight-start
    await Shake.isShowFloatingReportButton();
    await Shake.isInvokeShakeOnShakeDeviceEvent();
    await Shake.isInvokeShakeOnScreenshot();
    // highlight-end
}
```

### Shaking
By default, shaking gesture causes the SDK to pop up.

:::note

iOS apps in the debug mode will trigger React Native developer tools instead of Shake.
You should run your app in the release mode if you want to test shake gesture invoking.

:::

### Button
This invocation event will create the floating button on top of your app's UI which users can clearly see at all times.
This button can be dragged to a more suitable position.

### Taking a screenshot
The SDK will be invoked when users make a screenshot while using your app.

## Invoke through code
You can invoke SDK through code by calling the `Shake.show()` method  
anywhere after `Shake.start()`.

Here’s an example:

```javascript title="App.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

const reportBug = () => {
    // highlight-next-line
    Shake.show();
}
```

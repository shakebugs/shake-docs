---
id: invoke
title: Invoke
---
This page describes in detail all the different methods that can be used to invoke the SDK.

## Invoking
There are three possible ways to start Shake SDK from your application.
You can invoke Shake SDK either by shaking the device, floating button or taking a screenshot.
To customize invocation behaviour you have the following 3 methods at your disposal.

`Shake.setShowFloatingReportButton(bool isEnabled)`
`Shake.setInvokeShakeOnShaking(bool isEnabled)`
`Shake.setInvokeShakeOnScreenshot(bool isEnabled)`


For example if you'd like to use all of the invocation events mentioned above you can enable them like this
```javascript title="App.js"
// highlight-start
Shake.setShowFloatingReportButton(true);
Shake.setInvokeShakeOnShaking(true);
Shake.setInvokeShakeOnScreenshot(true);
// highlight-end
```

## Actions
1. **Shake** - shaking a device causes the SDK to pop up.
2. **Button** - floating button will be added on top of your app's UI which users can tap to pop up SDK.
 The button can be dragged to a more suitable position.
3. **Screenshot** - taking a screenshot causes the SDK to pop up.

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



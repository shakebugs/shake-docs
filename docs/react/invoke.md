---
id: invoke
title: Invoke
---
There are various ways of invoking and interacting with the Shake SDK.

## Invoking
By default, Shake SDK can be invoked using Shake's "Bug" button, which appears automatically when you start Shake.
There are two other Shake invocation events described below.  
You can invoke Shake SDK either by shaking the device, or taking a screenshot. 
To customize invocation behaviour you have the following 3 methods at your disposal.

`Shake.setShowFloatingReportButton(bool showFloatingReportButton)
`
`Shake.setInvokeShakeOnShaking(bool invokeOnShake)
`
`Shake.setInvokeShakeOnScreenshot(bool invokeOnScreenshot)
`

For example if you'd like to use all of the invocation events mentioned above you can enable them like this
```javascript title="App.js"
// highlight-start
Shake.setShowFloatingReportButton(true);
Shake.setInvokeShakeOnShaking(true);
Shake.setInvokeShakeOnScreenshot(true);
// highlight-end
```

## Actions
1. **Shake** - shaking gesture causes the SDK to pop up.
1. **Button** - default action, creates the floating button on top of your app's UI which users can clearly see at all times.
 This button can be dragged to a more suitable position.
1. **Screenshot** - the SDK will be invoked when users make a screenshot while using your app.

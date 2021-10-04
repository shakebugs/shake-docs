---
id: invoke
title: Invoke
---
This page describes in detail all the different methods that can be used to invoke the SDK.

## Invoke manually
By default, the SDK is invoked when a user shakes their device. You don't need to code anything.

But if you want to, you can customize that.

Let's look at an example. You want your users to invoke SDK either when
they shake their device, or when they take a screenshot. 
To do that, set true or false for certain configuration properties:


```javascript title="App.js"
// highlight-start
Shake.setInvokeShakeOnShakeDeviceEvent(true);
Shake.setInvokeShakeOnScreenshot(true);
Shake.start('client-id', 'client-secret');
// highlight-end
```

This method also enables you to change the preferred invocation event on-the-go during runtime.
Here’s a list of all available ones below, feel free to use any combination of these.

```javascript title="App.js"
// highlight-start
Shake.setInvokeShakeOnShakeDeviceEvent(true);
Shake.setInvokeShakeOnScreenshot(true);
Shake.setShowFloatingReportButton(true);
// highlight-end
```

### Shaking
The default, shaking gesture causes the SDK to pop up.

:::note

iOS apps in the debug mode will trigger React Native developer tools instead of Shake.
You should run your app in the release mode if you want to test shake gesture invoking.

:::

:::note

In case you want to test Shake SDK in Android emulator, it’s useful to know that emulator’s default shaking gesture is too weak to invoke Shake.

:::

Shaking gesture sensitivity can be fine tuned as shown in the snippet below:

```javascript title="App.js"
// highlight-next-line
Shake.setShakingThreshold(400); // Default value is 600.
```

In the above example, threshold is reduced a bit, meaning that Shake is a bit easier to invoke with the shaking gesture.

A valid treshold value range is `1 - 1000`, with bigger values representing decreased sensitivity meaning that a stronger 
motion gesture is required to invoke Shake.

### Button
This invocation event will create the floating button on top of your app's UI which users can clearly see at all times. This button can be dragged to a more suitable position.

:::note

In the Android emulator, you might need to click the button twice if one click doesn’t do it.
Also, system interface elements [may sometimes get in a way](https://help.shakebugs.com/en/articles/3321805-the-report-a-bug-button-is-hidden-behind-an-interface-element) of the button.

:::

### Taking a screenshot
The SDK will be invoked when users make a screenshot while using your app.

:::note

In Android, the only way for any SDK to realize that a screenshot has been captured is to monitor the screenshots directory.
Because of that, if you opt for this invocation method, the storage permission will be requested from a user when they launch your app.

:::

:::note

App Store rejects apps that get in the way of the default screenshot behavior. For that reason, don't use this invocation method in your production releases.

:::

## Invoke through code
You can invoke SDK through code by calling the `Shake.show` method anywhere after `Shake.start`.

The `show` method can also be called with the argument `ShakeScreen` which determines the first presented screen in the Shake UI. Default value 
is `ShakeScreen.NEW`.

```javascript title="App.js"
// highlight-next-line
import Shake, {ShakeScreen} from '@shakebugs/react-native-shake';

const onReportProblemPressed = () => {
    // Displays Shake with the New Ticket screen at the top of the stack.
    // highlight-next-line
    Shake.show();
}

const onFeedbackCenterPressed = () => {
    // Displays Shake starting at the Home screen.
    // highlight-next-line
    Shake.show(ShakeScreen.HOME);
}
```

When Shake is invoked with the `ShakeScreen.NEW`, app screenshot and automatic video recording are automatically attached and visible
in the attached files section of the UI.

All other data, like [Activity history](react/activity.md) or [Black box](react/blackbox.md), is automatically included in every user’s bug report — no additional code required.

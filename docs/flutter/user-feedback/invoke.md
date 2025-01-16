---
id: invoke
title: Invoke
---

import useBaseUrl from '@docusaurus/useBaseUrl';

>Decide how you want Shake user feedback to be invoked.

<p class="p2 mt-40">You're viewing the Flutter docs. Other platforms → &nbsp;
<a href="/docs/ios/user-feedback/invoke/">iOS</a>&nbsp;
<a href="/docs/android/user-feedback/invoke/">Android</a>&nbsp;  
<a href="/docs/react/user-feedback/invoke/">React Native</a>&nbsp; 
<a href="/docs/web/user-feedback/invoke/">Web</a>&nbsp;
</p>

## Invoke manually
By default, Shake user feedback is invoked when a user shakes their device.
You don't need to code anything:

<table class="media-container mt-40 mb-40">
<img
  alt="Open Shake New ticket screen"
  width="520"
  src={useBaseUrl('img/open-shake-new-ticket-screen.svg')}
/>
</table>

But if you want to, you can customize that.
Let's look at an example where you want Shake user feedback to be invoked either when your users shake their device or when they take a screenshot:

```dart title="main.dart"
// highlight-start
Shake.setInvokeShakeOnShakeDeviceEvent(true);
Shake.setInvokeShakeOnScreenshot(true);
Shake.start('app-api-key');
// highlight-end
```

You can also change the preferred invocation event on-the-fly during runtime.
Here’s a list of all available options. Feel free to use any combination of these:

```dart title="main.dart"
// highlight-start
Shake.setInvokeShakeOnShakeDeviceEvent(true);
Shake.setInvokeShakeOnScreenshot(true);
Shake.setShowFloatingReportButton(true);
// highlight-end
```

Also, feel free to change which Shake screen is shown when Shake user feedback is invoked manually:
* [New ticket screen](/flutter/shake-ui/new-ticket-screen.md) (default)
* [Home screen](/flutter/shake-ui/home-screen.md)
* [Chat screen](/flutter/shake-ui/chat-screen.md)

```dart title="main.dart"
// highlight-start
import 'package:shake_flutter/shake_flutter.dart';
import 'package:shake_flutter/enums/shake_screen.dart';
// highlight-end

// highlight-next-line
Shake.setDefaultScreen(ShakeScreen.newTicket);
// highlight-next-line
Shake.setDefaultScreen(ShakeScreen.home);
// highlight-next-line
Shake.setDefaultScreen(ShakeScreen.chat);
```

If you are showing Shake chat screen, make sure that you have [registered](/flutter/users/register-user) your app user. Otherwise Shake home screen will be shown.

### Shaking gesture

By default, the shaking gesture opens Shake user feedback.

:::note

If you are testing Shake SDK on your computer, keep in mind that the Android Emulator’s "shaking gesture"
is too weak to invoke Shake. You can decrease Shake's threshold as described below, or use another invocation method.

:::

The shaking threshold can be fine-tuned too. Let's decrease it, for example, so that Shake user feedback is easier to invoke:

```dart title="main.dart"
// highlight-next-line
Shake.setShakingThreshold(400); // Default value is 600.
```

A valid threshold value range is `1 - 1000`. Higher values represent higher thresholds, meaning that a stronger 
motion gesture will be required to invoke Shake user feedback.

### Floating button
This invocation event creates a floating button on top of your app's UI which your users
will be able to see and drag around the screen at all times.

:::note

In the Android Emulator, you might need to click the button twice if one click doesn’t do it.
Also, system interface elements [may sometimes get in the way](https://help.shakebugs.com/en/articles/3321805-the-report-a-bug-button-is-hidden-behind-an-interface-element) of the button.

:::

### Taking a screenshot
Shake user feedback will be invoked when your user takes a screenshot while using your app.

:::note

The only way for any SDK to realize that a screenshot has been captured is to monitor the screenshots directory.
Because of that, if you opt for this invocation method, storage permission will be requested from a user when they launch your app.

:::

:::note
App Store rejects apps that get in the way of the default screenshot behavior. For that reason, don't use this invocation method in your production releases.
:::note

## Invoke through code
Invoke Shake user feedback through code by calling the `Shake.show` method anywhere after `Shake.start`.

The `show` method can be called with the argument `ShakeScreen` which determines the first presented screen in the Shake UI.
The default value is `ShakeScreen.newTicket`.

```dart title="main.dart"
// highlight-start
import 'package:shake_flutter/shake_flutter.dart';
import 'package:shake_flutter/enums/shake_screen.dart';
// highlight-end

void onReportProblemPressed() { 
    // Displays Shake with the New Ticket screen.
    // highlight-next-line
    Shake.show();
}

const onFeedbackCenterPressed() { 
    // Displays Shake starting at the Home screen.
    // highlight-next-line
    Shake.show(ShakeScreen.home);
}

void onStartChatPressed() {
    // Displays Shake empty chat screen.
    // highlight-next-line
    Shake.show(ShakeScreen.chat);
}
```

If an [auto screenshot](/flutter/configuration-and-data/auto-screenshot.md) and
[auto screen recording](/flutter/configuration-and-data/auto-screen-recording.md) are enabled,
when you call `ShakeScreen.newTicket` they will be automatically attached to a ticket.

If enabled, [activity history](/flutter/configuration-and-data/activity-history.md),
[black box](/flutter/configuration-and-data/black-box.md) and all other data are also automatically attached.
No additional code is required.

If you are showing Shake chat screen, make sure that you have [registered](/flutter/users/register-user) your app user. Otherwise Shake home screen will be shown.

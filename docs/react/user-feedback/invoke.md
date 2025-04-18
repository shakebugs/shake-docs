---
id: invoke
title: Invoke
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Decide how you want Shake user feedback to be invoked.

<p class="p2 mt-40">You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/user-feedback/invoke/">iOS</a>&nbsp; 
<a href="/docs/android/user-feedback/invoke/">Android</a>&nbsp;
<a href="/docs/flutter/user-feedback/invoke/">Flutter</a>&nbsp;  
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

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-start
Shake.setInvokeShakeOnShakeDeviceEvent(true);
Shake.setInvokeShakeOnScreenshot(true);
Shake.start('app-api-key');
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
Shake.setInvokeShakeOnShakeDeviceEvent(true);
Shake.setInvokeShakeOnScreenshot(true);
Shake.start('app-api-key');
// highlight-end
```

</TabItem>
</Tabs>


You can also change the preferred invocation event on-the-fly during runtime.
Here’s a list of all available options. Feel free to use any combination of these:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-start
Shake.setInvokeShakeOnShakeDeviceEvent(true);
Shake.setInvokeShakeOnScreenshot(true);
Shake.setShowFloatingReportButton(true);
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
Shake.setInvokeShakeOnShakeDeviceEvent(true);
Shake.setInvokeShakeOnScreenshot(true);
Shake.setShowFloatingReportButton(true);
// highlight-end
```

</TabItem>
</Tabs>

Also, feel free to change which Shake screen is shown when Shake user feedback is invoked manually:
* [New ticket screen](/react/shake-ui/new-ticket-screen.md) (default)
* [Home screen](/react/shake-ui/home-screen.md)
* [Chat screen](react/shake-ui/chat-screen.md)

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
import Shake, {ShakeScreen} from '@shakebugs/react-native-shake';

// highlight-next-line
Shake.setDefaultScreen(ShakeScreen.NEW);
// highlight-next-line
Shake.setDefaultScreen(ShakeScreen.HOME);
// highlight-next-line
Shake.setDefaultScreen(ShakeScreen.CHAT);
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake, {ShakeScreen} from '@shakebugs/react-native-shake';

// highlight-next-line
Shake.setDefaultScreen(ShakeScreen.NEW);
// highlight-next-line
Shake.setDefaultScreen(ShakeScreen.HOME);
// highlight-next-line
Shake.setDefaultScreen(ShakeScreen.CHAT);
```

</TabItem>
</Tabs>

If you are showing Shake chat screen, make sure that you have [registered](/react/users/register-user) your app user. Otherwise Shake home screen will be shown.

### Shaking gesture
By default, the shaking gesture opens Shake user feedback.

:::note

If you are testing Shake SDK on your computer, keep in mind that the Android Emulator’s "shaking gesture"
is too weak to invoke Shake. You can decrease Shake's threshold as described below, or use another invocation method.

:::

The shaking threshold can be fine-tuned too. Let's decrease it, for example, so that Shake user feedback is easier to invoke:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
Shake.setShakingThreshold(400); // Default value is 600.
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.setShakingThreshold(400); // Default value is 600.
```

</TabItem>
</Tabs>

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

### Right edge pan
Shake user feedback will be invoked with a one-finger swiping gesture from the right edge of the screen.

:::note

The right edge pan gesture won’t work if performed over a ListView or ScrollView.
Use one of the alternative ways to invoke Shake instead.

:::

## Invoke through code
Invoke Shake user feedback through code by calling the `Shake.show` method anywhere after `Shake.start`.

The `show` method can be called with the argument `ShakeScreen` which determines the first presented screen in the Shake UI.
The default value is `ShakeScreen.NEW`.

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
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

const onStartChatPressed = () => {
    // Displays Shake empty chat screen.
    // highlight-next-line
    Shake.show(ShakeScreen.CHAT);
}
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
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

const onStartChatPressed = () => {
    // Displays Shake empty chat screen.
    // highlight-next-line
    Shake.show(ShakeScreen.CHAT);
}
```

</TabItem>
</Tabs>

If an [auto screenshot](/react/configuration-and-data/auto-screenshot.md) and
[auto screen recording](/react/configuration-and-data/auto-screen-recording.md) are enabled,
when you call `ShakeScreen.NEW` they will be automatically attached to a ticket.

If enabled, [activity history](/react/configuration-and-data/activity-history.md),
[black box](/react/configuration-and-data/black-box.md) and all other data are also automatically attached.
No additional code is required.

If you are showing Shake chat screen, make sure that you have [registered](/react/users/register-user) your app user. Otherwise Shake home screen will be shown.


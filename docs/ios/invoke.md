---
id: invoke
title: Invoke
---
This page covers how to change the user-initiated action that invokes the Shake SDK.

## Invoke manually
By default, the SDK is invoked when a user shakes their device.
You don't need to code anything.

You can choose another action — or more than one — that invokes the SDK.

Let's look at an example.
You want your users to invoke SDK either when they shake their device, or when they take a screenshot.
To do that, set true or false for certain `Shake.configuration` properties:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objc
SHKShake.configuration.isInvokedByShakeDeviceEvent = YES;
SHKShake.configuration.isInvokedByScreenshot = YES;

[SHKShake start];
```

</TabItem>

<TabItem value="swift">

```swift
Shake.configuration.isInvokedByShakeDeviceEvent = true
Shake.configuration.isInvokedByScreenshot = true

Shake.start()
```

</TabItem>
</Tabs>

This method also enables you to change the preferred invocation event on-the-go during runtime. Here’s a list of all available ones below, feel free to use any combination of these.

| Parameter | Default | Description |
|--| -- | -- |
 | `isInvokedByShakeDeviceEvent` | `true` | Shaking device gesture |
 | `isFloatingReportButtonShown` | `false` | Creates a floating button on top of your app's UI which users can see clearly at all times. This button can be dragged to a more suitable position. |
 | `isInvokedByScreenshot` | `false` | Event when user makes a screenshot while using your app. |
     | `isInvokedByRightEdgePan` | `false` | One-finger swiping gesture from the right edge of the screen. |


## Invoke through code
You can invoke SDK through code by calling the `Shake.show()` method anywhere after `Shake.start()`, optionally adding bug description or attaching files. Here’s an example:

<Tabs groupId="ios" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]} defaultValue="swift"><TabItem value="objectivec">

```objc
[SHKShake show]; // Shows bug report window

SHKReportData *reportData = [[SHKReportData alloc] initWithBugDescription:@"Broken UI" attachedFiles:@[]];
[SHKShake showWithReportData:reportData]; // Shows bug report window with pre-populated data
```

</TabItem><TabItem value="swift">

```swift
Shake.show(reportData: reportData) // Shows bug report window

let reportData = ShakeReportData(bugDescription: "Broken UI", attachedFiles: [])
Shake.show(reportData: reportData) // Shows bug report window with pre-populated data
```

</TabItem></Tabs>

All other data, like [Activity history](ios/activity.md) or [Black box](ios/blackbox.md), is automatically included in every user’s bug report — no additional code required.

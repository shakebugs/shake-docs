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

```objc title="AppDelegate.m"
SHKShake.configuration.isInvokedByShakeDeviceEvent = YES;
SHKShake.configuration.isInvokedByScreenshot = YES;

[SHKShake start];
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
Shake.configuration.isInvokedByShakeDeviceEvent = true
Shake.configuration.isInvokedByScreenshot = true

Shake.start()
```

</TabItem>
</Tabs>

This method also enables you to change the preferred invocation event on-the-go during runtime. Here’s a list of all available ones below, feel free to use any combination of these.

<Tabs
groupId="ios"
defaultValue="swift"
values={[
{ label: 'Objective-C', value: 'objectivec'},
{ label: 'Swift', value: 'swift'},
]
}>

<TabItem value="objectivec">

```objc title="AppDelegate.m"
SHKShake.configuration.isInvokedByShakeDeviceEvent = YES;
SHKShake.configuration.isFloatingReportButtonShown = YES;
SHKShake.configuration.isInvokedByScreenshot = YES;
SHKShake.configuration.isInvokedByRightEdgePan = YES;
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
Shake.configuration.isInvokedByShakeDeviceEvent = true
Shake.configuration.isFloatingReportButtonShown = true
Shake.configuration.isInvokedByScreenshot = true
Shake.configuration.isInvokedByRightEdgePan = true
```

</TabItem>
</Tabs>

### Shaking
The default, shaking gesture causes the SDK to pop up.

### Button
This invocation event will create the floating button on top of your app's UI which users can clearly see at all times.This button can be dragged to a more suitable position.

### Taking a screenshot
The SDK will be invoked when testers make a screenshot while using your app.

:::note

App Store rejects apps that get in the way of the default screenshot behavior. For that reason, don't use this invocation method in your production releases.

:::

### Right Edge Pan
Invoke Shake with a one-finger swiping gesture from the right edge of the screen.

## Invoke through code
You can invoke SDK through code by calling the `Shake.show()` method anywhere after `Shake.start()`, optionally adding bug description or attaching files. Here’s an example:

<Tabs groupId="ios" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]} defaultValue="swift"><TabItem value="objectivec">

```objc title="AppDelegate.m"
// Shows bug report window
[SHKShake show];

SHKShakeReportData *reportData = [[SHKShakeReportData alloc] initWithBugDescription:@"Broken UI" attachedFiles:@[]];
// Shows bug report window with pre-populated data
[SHKShake showWithReportData:reportData]; 
```

</TabItem><TabItem value="swift">

```swift title="AppDelegate.swift"
// Shows bug report window
Shake.show(reportData: reportData)

let reportData = ShakeReportData(bugDescription: "Broken UI", attachedFiles: [])
// Shows bug report window with pre-populated data
Shake.show(reportData: reportData)
```

</TabItem></Tabs>

All other data, like [Activity history](ios/activity.md) or [Black box](ios/blackbox.md), is automatically included in every user’s bug report — no additional code required.

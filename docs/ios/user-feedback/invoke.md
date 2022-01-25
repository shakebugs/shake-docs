---
id: invoke
title: Invoke
---

import useBaseUrl from '@docusaurus/useBaseUrl';

>Decide how you want Shake user feedback to be invoked.

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

```java title="App.m"
// highlight-start
SHKShake.configuration.isInvokedByShakeDeviceEvent = YES;
SHKShake.configuration.isInvokedByScreenshot = YES; 
[SHKShake startWithClientId:@"client-id" clientSecret:@"client-secret"];
// highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
// highlight-start
Shake.configuration.isInvokedByShakeDeviceEvent = true
Shake.configuration.isInvokedByScreenshot = true
Shake.start(clientId: "client-id", clientSecret: "client-secret")
// highlight-end
```

</TabItem>
</Tabs>

You can also change the preferred invocation event on-the-fly during runtime.
Here’s a list of all available options. Feel free to use any combination of these:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```java title="App.m"
// highlight-start
SHKShake.configuration.isInvokedByShakeDeviceEvent = YES; 
SHKShake.configuration.isFloatingReportButtonShown = YES; 
SHKShake.configuration.isInvokedByScreenshot = YES; 
SHKShake.configuration.isInvokedByRightEdgePan = YES;
// highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
// highlight-start
Shake.configuration.isInvokedByShakeDeviceEvent = true
Shake.configuration.isFloatingReportButtonShown = true
Shake.configuration.isInvokedByScreenshot = true
Shake.configuration.isInvokedByRightEdgePan = true
// highlight-end
```

</TabItem>
</Tabs>

Also, feel free to change which Shake screen is shown when Shake user feedback is invoked manually:
* [New ticket screen](/ios/shake-ui/new-ticket-screen.md) (default)
* [Home screen](/ios/shake-ui/home-screen.md)

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```java title="App.m"
// highlight-next-line
SHKShake.configuration.defaultShowOption = SHKShowOptionNew;
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
// highlight-next-line
Shake.configuration.defaultShowOption = .new;
```

</TabItem>
</Tabs>

### Shaking gesture
By default, the shaking gesture opens Shake user feedback.

The shaking threshold can be fine-tuned too. Let's decrease it, for example, so that Shake user feedback is easier to invoke:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```java title="App.m"
// highlight-next-line
SHKShake.configuration.shakingThreshold = 400; // Default value is 600.
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
// highlight-next-line
Shake.configuration.shakingThreshold = 400 // Default value is 600.
```

</TabItem>
</Tabs>

A valid threshold value range is `1 - 1000`. Higher values represent higher thresholds, meaning that a stronger 
motion gesture will be required to invoke Shake user feedback.

### Floating button
This invocation event creates a floating button on top of your app's UI which your users
will be able to see and drag around the screen at all times.

### Taking a screenshot
Shake user feedback will be invoked when your user takes a screenshot while using your app.

:::note
App Store rejects apps that get in the way of the default screenshot behavior. 
For that reason, don't use this invocation method in your production releases.
:::

### Right edge pan
Shake user feedback will be invoked with a one-finger swiping gesture from the right edge of the screen.

## Invoke through code
Invoke Shake user feedback through code by calling the `Shake.show` method anywhere after `Shake.start`.

The `show` method can also be called with the argument `SHKShowOption` which determines the first presented screen in the Shake UI. The default value is `SHKShowOptionNew`.

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objc title="SettingsVM.m"
@interface SettingsVM ()

@end

@implementation SettingsVM

- (void)onDidPressReportProblem { 
    /// Displays Shake with the New Ticket screen at the top of the stack. 
    //highlight-next-line 
    [SHKShake show]; 
}

- (void)onDidPressShowFeedbackCenter { 
    /// Displays Shake starting at the Home screen. 
    //highlight-next-line 
    [SHKShake show:SHKShowOptionHome]; 
}

@end
```

</TabItem>

<TabItem value="swift">

```swift title="SettingsVM.swift"
func onDidPressReportProblem() {
    /// Displays Shake with the New Ticket screen at the top of the stack.
    //highlight-next-line
    Shake.show()  
}

func onDidPressShowFeedbackCenter() {
    /// Displays Shake starting at the Home screen.
    //highlight-next-line
    Shake.show(.home)
}
```

</TabItem>
</Tabs>

If an [auto screenshot](/ios/configuration-and-data/auto-screenshot.md) and [auto screen recording](/ios/configuration-and-data/auto-screen-recording.md) are enabled, when you call SHKShowOptionNew they will be automatically attached to a ticket.

If enabled, [activity history](/ios/configuration-and-data/activity-history.md),
[black box](/ios/configuration-and-data/black-box.md) and all other data are also automatically attached.
No additional code is required.

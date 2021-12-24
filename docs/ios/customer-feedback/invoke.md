---
id: invoke
title: Invoke
---
This page describes in detail all the different methods that can be used to invoke the SDK.

## Invoke manually
By default, the SDK is invoked when a user shakes their device.
You don't need to code anything.

But if you want to, you can customize that.

Let's look at an example.
You want your users to invoke SDK either when they shake their device, or when they take a screenshot.
To do that, set true or false for certain configuration properties:

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
//highlight-start
SHKShake.configuration.isInvokedByShakeDeviceEvent = YES;
SHKShake.configuration.isInvokedByScreenshot = YES;
[SHKShake startWithClientId:@"client-id" clientSecret:@"client-secret"];
//highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
Shake.configuration.isInvokedByShakeDeviceEvent = true
Shake.configuration.isInvokedByScreenshot = true
Shake.start(clientId: "client-id", clientSecret: "client-secret")
//highlight-end
```

</TabItem>
</Tabs>

This method also enables you to change the preferred invocation event on-the-go during runtime. Here’s a list of all available ones below, feel free to use any combination of these:

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
//highlight-start
SHKShake.configuration.isInvokedByShakeDeviceEvent = YES;
SHKShake.configuration.isFloatingReportButtonShown = YES;
SHKShake.configuration.isInvokedByScreenshot = YES;
SHKShake.configuration.isInvokedByRightEdgePan = YES;
//highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
Shake.configuration.isInvokedByShakeDeviceEvent = true
Shake.configuration.isFloatingReportButtonShown = true
Shake.configuration.isInvokedByScreenshot = true
Shake.configuration.isInvokedByRightEdgePan = true
//highlight-end
```

</TabItem>
</Tabs>

You can also configure which Shake screen you want to show when Shake is invoked manually.  

It can be either [New ticket screen](ios/screens/new-ticket-screen.md) or [Home screen](ios/screens/home-screen.md), depending on your preferences:

<Tabs
groupId="ios"
defaultValue="swift"
values={[
{ label: 'Objective-C', value: 'objectivec'},
{ label: 'Swift', value: 'swift'},
]
}>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.configuration.defaultShowOption = .new;
```
</TabItem>

<TabItem value="objectivec">

```objc title="AppDelegate.m"
// highlight-next-line
SHKShake.configuration.defaultShowOption = SHKShowOptionNew;
```

</TabItem>
</Tabs>

The default value is `SHKShowOption.new`.

### Shaking
The default, shaking gesture causes the SDK to pop up.

Shaking gesture sensitivity can be fine tuned as shown in the snippet below:

<Tabs groupId="ios" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]} defaultValue="swift"><TabItem value="objectivec">

```objc title="AppDelegate.m"
//highlight-start
 SHKShake.configuration.shakingThreshold = 400; // Default value is 600.
//highlight-end
```
</TabItem><TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
 Shake.configuration.shakingThreshold = 400 // Default value is 600.
//highlight-end
```

</TabItem></Tabs>

In the above example, threshold is reduced a bit, meaning that Shake is a bit easier to invoke with the shaking gesture.

A valid treshold value range is `1 - 1000`, with bigger values representing decreased sensitivity meaning that a stronger 
motion gesture is required to invoke Shake.

### Button
This invocation event will create the floating button on top of your app's UI which users can clearly see at all times. This button can be dragged to a more suitable position.

### Taking a screenshot
The SDK will be invoked when testers make a screenshot while using your app.

:::note

App Store rejects apps that get in the way of the default screenshot behavior. For that reason, don't use this invocation method in your production releases.

:::

### Right Edge Pan
Invoke Shake with a one-finger swiping gesture from the right edge of the screen.

## Invoke through code

You can invoke SDK through code by calling the `Shake.show` method anywhere after `Shake.start`. 

The `show` method can also be called with the argument `SHKShowOption` which determines the first presented screen in the Shake UI. Default value 
is `SHKShowOptionNew`.

<Tabs groupId="ios" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]} defaultValue="swift"><TabItem value="objectivec">

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

</TabItem><TabItem value="swift">

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

</TabItem></Tabs>


When Shake is invoked with the `SHKShowOptionNew`, app screenshot and automatic video recording are automatically attached and visible
in the attached files section of the UI.

All other data, like [Activity history](ios/configuration-and-data/activity.md) or [Black box](ios/configuration-and-data/blackbox.md), is automatically included in every user’s bug report — no additional code required.

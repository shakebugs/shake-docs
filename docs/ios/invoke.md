---
id: invoke
title: Invoke
---
This page describes in detail all the different methods that can be used to invoke the SDK.

## Manual invoking
By default, the SDK is invoked when a user shakes their device.
You don't need to code anything, but if you want to, you can customize that.

Let's look at an example.

You want your users to invoke SDK either when they shake their device, or when they take a screenshot. 
To customize invocation events, pass `ShakeInvocationEvent` to `Shake.startWithInvocationEvents()` 
method when starting the SDK.

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

```objectivec title="AppDelegate.m"
[SHKShake startWithInvocationEvents: ShakeInvocationEventShake | ShakeInvocationEventScreenshot];
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
Shake.start(withInvocationEvents: [.shake, .screenshot])
```

</TabItem>
</Tabs>

Here’s a list of all available ones below, feel free to use any combination of these.
 
<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
[SHKShake startWithInvocationEvents: ShakeInvocationEventShake | ShakeInvocationEventScreenshot | ShakeInvocationEventButton];
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
Shake.start(withInvocationEvents: [.shake, .screenshot, .button])
```

</TabItem>
</Tabs>

## Actions
1. **Shake** - the default, shaking gesture causes the SDK to pop up.
1. **Button** - this invocation event will create the floating button on top of your app's UI which users can clearly see at all times. This button can be dragged to a more suitable position.
1. **Screenshot** - the SDK will be invoked when users make a screenshot while using your app.

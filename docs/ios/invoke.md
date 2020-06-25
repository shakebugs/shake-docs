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
To customize the invocation events, instead of using the `start` method,
use the method that accepts the invocation events and pass the desired
values of the `ShakeInvocationEvent` enum when starting the SDK. In our example, you'd use

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
// highlight-next-line
[SHKShake startWithInvocationEvents: ShakeInvocationEventShake | ShakeInvocationEventScreenshot];
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.start(withInvocationEvents: [.shake, .screenshot])
```

</TabItem>
</Tabs>

A list of all possible invocation events is below so feel free to use any combination of them.

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec
// highlight-start
ShakeInvocationEventShake
ShakeInvocationEventButton
ShakeInvocationEventScreenshot
// highlight-end
```

</TabItem>

<TabItem value="swift">

```swift
// highlight-start
.shake
.screenshot
.button
// highlight-end
```

</TabItem>
</Tabs>

### Shaking
By default, shaking gesture causes the SDK to pop up.

### Button
This invocation event will create the floating button on top of your app's UI which users can clearly see at all times.
This button can be dragged to a more suitable position.

### Taking a screenshot
The SDK will be invoked when users make a screenshot while using your app.


---
id: describe-crash
title: Describe crash
---

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

On the next app launch after the crash occurs, a sheet offering the user a chance to describe the crash will appear.

This can be enabled by setting the `isAskForCrashDescription` flag to `true` prior to calling the `start` method.

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
//highlight-start
SHKShake.configuration.isAskForCrashDescriptionEnabled = YES;
//highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
Shake.configuration.isAskForCrashDescriptionEnabled = true
//highlight-end
```

</TabItem>
</Tabs>


When enabled, this feature allows the user to provide a more detailed description of the actions that could have led up to the 
crash, and potentially edit the information that is being passed to Shake dashboard.

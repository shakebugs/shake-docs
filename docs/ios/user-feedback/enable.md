---
id: enable
title: Enable
---

>The User feedback module is enabled by default.

<p class="p2 mt-40">You're viewing the iOS docs. Other platforms → &nbsp;
<a href="/docs/android/user-feedback/enable/">Android</a>&nbsp;
<a href="/docs/react/user-feedback/enable/">React Native</a>&nbsp; 
<a href="/docs/flutter/user-feedback/enable/">Flutter</a>&nbsp;  
</p>


This is how you disable it:
1. First, set the `isUserFeedbackEnabled` flag to `false`.
1. Then, call the `Shake.start` method.

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
//highlight-start
SHKShake.configuration.isUserFeedbackEnabled = NO;
//highlight-end
```

</TabItem><TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
Shake.configuration.isUserFeedbackEnabled = false
//highlight-end
```

</TabItem></Tabs>

---
id: enable
title: Enable
---

>The User feedback module is enabled by default.

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

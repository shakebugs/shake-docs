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

```objectivec title="App.m"
// highlight-next-line
SHKShake.configuration.isUserFeedbackEnabled = NO;
```

</TabItem><TabItem value="swift">

```swift title="App.swift"
// highlight-next-line
Shake.configuration.isUserFeedbackEnabled = false
```

</TabItem></Tabs>

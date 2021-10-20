---
id: describe-crash
title: Describe crash
---

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

On the next app launch after the crash occurs, a sheet offering the user a chance to describe the crash will appear.

This can be enabled by setting the `isAskForCrashDescription` flag to `true` prior to calling the `start` method.

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="MainActivity.java"
// highlight-next-line
Shake.setAskForCrashDescription(true);
```

</TabItem><TabItem value="kotlin">

```kotlin title="MainActivity.kt"
// highlight-next-line
Shake.setAskForCrashDescription(true)
```

</TabItem></Tabs>

When enabled, this feature allows the user to provide a more detailed description of the actions that could have led up to the
crash, and potentially edit the information that is being passed to Shake dashboard.

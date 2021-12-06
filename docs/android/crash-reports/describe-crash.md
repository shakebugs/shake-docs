---
id: describe-crash
title: Describe crash
---

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

>On the first app launch after the crash occurs, Shake can offer the user a chance to describe the crash.

This option is disabled by default.

To enable it:
1. Set the `isAskForCrashDescription` flag to `true`.
1. Then, call the `Shake.start` method.

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

If the user wants to, they can then describe what they were doing before the crash, potentially helping you a lot with their comment.

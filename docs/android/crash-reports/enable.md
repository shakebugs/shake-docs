---
id: enable
title: Enable
---

>Crash reports module is disabled by default.

This is how you enable it:
1. Set the `isCrashReportingEnabled` flag to `true` first.
1. Then, call the `Shake.start` method.

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="App.java"
// highlight-next-line
Shake.setCrashReportingEnabled(true);
```

</TabItem><TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.setCrashReportingEnabled(true)
```

</TabItem></Tabs>

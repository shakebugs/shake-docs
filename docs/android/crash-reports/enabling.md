---
id: enabling
title: Enabling
---

Crash reporting is disabled by default but can be enabled by setting the `isCrashReportingEnabled` flag to `true` prior 
to calling the `start` method.

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

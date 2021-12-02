---
id: handling-error
title: Handling error
---

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

Sometimes, the application is making great use of error handling and wants to document these errors, or has some definitive points where caught errors
could use a bit more context.

Shake SDK enables you to report the caught errors and lets you decide how they are grouped. These non-fatal error reports will have all of the same 
contextual information as crash reports, and act as an extension to the crash reporting feature.

:::note

Avoid using unique values for error *clusterID*  as this will cause a large number of reported errors appear unrelated — although they actually are — which will clog your Shake dashboard.

:::

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
try {
    throw new ClassNotFoundException("Handled test exception");
} catch (Exception e) {
    // highlight-next-line
    Shake.handleError(e, "cluster-id");
}
```

</TabItem><TabItem value="kotlin">

```kotlin title="MainActivity.kt"
try {
    throw ClassNotFoundException("Handled test exception")
} catch (e: Exception) {
    // highlight-next-line
    Shake.handleError(e, "cluster-id")
}
```

</TabItem></Tabs>

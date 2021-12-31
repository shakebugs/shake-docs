---
id: handling-error
title: Handling error
---

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

>Make great use of error handling and document these errors.

Shake allows you to report those caught errors and group them together.
These non-fatal error reports will have all of the same 
contextual information as crash reports and will act as an extension to the crash reporting feature.

:::note

Avoid using unique values for error *clusterID*  as that would cause a large number of reported errors to stay
unrelated and ungrouped, which would clog your Shake dashboard.

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

---
id: enable
title: Enable
---

>The User feedback module is enabled by default.

This is how you disable it:
1. First, set the `setUserFeedbackEnabled` flag to `false`.
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
Shake.setUserFeedbackEnabled(false);
```

</TabItem><TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.setUserFeedbackEnabled(false)
```

</TabItem></Tabs>

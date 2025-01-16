---
id: enable
title: Enable
---

>The User feedback module is enabled by default.

<p class="p2 mt-40">You're viewing the Android docs. Other platforms →&nbsp;
<a href="/docs/ios/user-feedback/enable/">iOS</a>&nbsp;
<a href="/docs/react/user-feedback/enable/">React Native</a>&nbsp;
<a href="/docs/flutter/user-feedback/enable/">Flutter</a>&nbsp;
</p>

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

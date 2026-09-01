---
id: enable
title: Enable
---

>The Crash reports module is enabled by default.

<p class="p2 mt-40">
You're viewing the Android docs. Other platform →&nbsp;
<a href="/docs/ios/crash-reports/enable/">iOS</a>&nbsp;
</p>

If you'd like to turn it off, set the `setCrashReportingEnabled` flag to `false` before calling the `Shake.start` method.

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
Shake.setCrashReportingEnabled(false);
```

</TabItem><TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.setCrashReportingEnabled(false)
```

</TabItem></Tabs>

Set up [deobfuscation](/android/crash-reports/deobfuscation) and then [test crash reporting](/android/crash-reports/test-it-out) in your app.

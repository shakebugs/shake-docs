---
id: enable
title: Enable
---

>The Crash reports module is disabled by default.

<p class="p2 mt-40">You're viewing the Android docs. Other platform →&nbsp;
<a href="/docs/ios/crash-reports/enable/">iOS</a>&nbsp;
</p>

This is how you enable it:
1. First, set the `setCrashReportingEnabled` flag to `true`.
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

After you have enabled crash reporting, set up [deobfuscation](/android/crash-reports/deobfuscation) and then [test crash reporting](/android/crash-reports/test-it-out) in your app.

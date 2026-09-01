---
id: enable
title: Enable
---

>The Crash reports module is enabled by default.

<p class="p2 mt-40">
You're viewing the iOS docs. Other platform → &nbsp;
<a href="/docs/android/crash-reports/enable/">Android</a>&nbsp;
</p>

If you'd like to turn it off, set the `isCrashReportingEnabled` flag to `false` before calling the `Shake.start` method.

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
//highlight-start
SHKShake.configuration.isCrashReportingEnabled = NO;
//highlight-end
```

</TabItem><TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
Shake.configuration.isCrashReportingEnabled = false
//highlight-end
```

</TabItem></Tabs>

Set up [symbolication](/ios/crash-reports/symbolicate) and then [test crash reporting](/ios/crash-reports/test-it-out) in your app.


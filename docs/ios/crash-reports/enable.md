---
id: enable
title: Enable
---

>The Crash reports module is disabled by default.

This is how you enable it:
1. First, set the `isCrashReportingEnabled` flag to `true`.
1. Then, call the `Shake.start` method.

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
// highlight-next-line
//highlight-start
SHKShake.configuration.isCrashReportingEnabled = YES;
//highlight-end
```

</TabItem><TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
Shake.configuration.isCrashReportingEnabled = true
//highlight-end
```

</TabItem></Tabs>

After you have enabled crash reporting, set up [symbolication](/ios/crash-reports/symbolicate) and then [test crash reporting](/ios/crash-reports/test-it-out) in your app.


---
id: enabling
title: Enabling
---

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

Crash reporting is disabled by default but can be enabled by setting the `isCrashReportingEnabled` flag to `true` prior 
to calling the `start` method.

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
SHKShake.configuration.isCrashReportingEnabled = YES;
//highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
Shake.configuration.isCrashReportingEnabled = true
//highlight-end
```

</TabItem>
</Tabs>

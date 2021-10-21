---
id: crash-reporting-enabling-disabling
title: Enabling/disabling
---

## Enable crash reporting

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


## Sending the report

Crash reports are automatically sent during the next app launch after the crash occurs. These reports follow the same rules as regular feedback reports to some extent.
The crash reports will be saved even if the app is offline and sent later when app regains connection. 

Your end users can't opt out of sending their crash report as they can with the standard feedback, however they can optionally provide more information and describe what happened prior to the crash.

## Editing the report

On the next app launch after the crash occurs, a sheet offering the user a chance to describe the crash will appear.

This can be enabled by setting the `isAskForCrashDescription` flag to `true` prior to calling the `start` method.

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
// highlight-next-line
Shake.setAskForCrashDescription(true);
```

</TabItem><TabItem value="kotlin">

```kotlin title="MainActivity.kt"
// highlight-next-line
Shake.setAskForCrashDescription(true)
```

</TabItem></Tabs>

When enabled, this feature allows the user to provide a more detailed description of the actions that could have led up to the
crash, and potentially edit the information that is being passed to Shake dashboard.


## Report context

As mentioned before, the crash report is similar to the regular feedback report. 

All of the existing Shake features elegantly interoperate with it, meaning that your crash report will provide the screenshot of the last thing that user saw, and even better, the last 15 seconds of the screen recording before the crash!

A detailed crash report like this one, along with logs and all other useful information, provides you with plenty of usable data to help you resolve the root issue efficiently.
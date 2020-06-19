---
id: silent-reports
title: Silent reports
---
This page explains how to submit yourself a bug report from the background, without interrupting your end user whatsoever.

## Overview
You can send silent reports to yourself by calling the `Shake.silentReport()` method anywhere after `Shake.start()`, as shown below:

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
// highlight-start
Shake.silentReport(
    String description,
    ShakeReportData reportData,
    ShakeReportConfiguration configuration
);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.silentReport(
    description: String,
    reportData: ShakeReportData,
    configuration: ShakeReportConfiguration
)
// highlight-end
```

</TabItem>
</Tabs>

This method allows you to include: Attachments, Quick facts, Black box, Activity history and a screenshot in your silent report.
If you decide to do so, your code should look something like this example:

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
public void example() {
  // highlight-start
  ShakeReportConfiguration configuration = new ShakeReportConfiguration();
  configuration.blackBoxData = true;
  configuration.activityHistoryData = true;
  configuration.screenshot = true;
  Shake.silentReport("description", createShakeReportData(), configuration);
  Shake.setMetadata("key", "value");
  // highlight-end
}
        
// highlight-start
private ShakeReportData createShakeReportData() {
  return new ShakeReportData() {
    /* From SDK Version 12.0 Quick facts are deprecated, so they're set to
       return null in this code example. */
    @Override
    public String quickFacts() {
    }
    @Override
    public List<ShakeFile> attachedFiles() {
      List<ShakeFile> shakeFiles = new ArrayList<>();
      return shakeFiles;
    }
  };
}
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
fun example() {
  // highlight-start
  val configuration = ShakeReportConfiguration()
  configuration.blackBoxData = true
  configuration.activityHistoryData = true
  configuration.screenshot = true
  Shake.silentReport("description", createShakeReportData(), configuration)
  Shake.setMetadata("key", "value")
  // highlight-end
}
        
// highlight-start
private fun createShakeReportData(): ShakeReportData {
  return object : ShakeReportData {
    /* From SDK Version 12.0 Quick facts are deprecated, so they're set to
       return null in this code example. */
    override fun quickFacts(): String {
      return null
    }

    override fun attachedFiles(): List<ShakeFile> {
      return ArrayList()
    }
  }
}
// highlight-end
```

</TabItem>
</Tabs>

## Bug submitted message
Silent reports are programmatic and no Shake UI is shown.
However, you can choose to display a small and non-intrusive message saying
`Done. Bug submitted successfully.` on the bottom of a users screen once the report has been submitted:

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
// highlight-start
ShakeReportConfiguration configuration = new ShakeReportConfiguration();
configuration.showReportSentMessage = true;
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
val configuration = ShakeReportConfiguration()
configuration.showReportSentMessage = true
// highlight-end
```

</TabItem>
</Tabs>

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
Shake.silentReport(String description, ShakeReportData reportData, ShakeReportConfiguration configuration);
```

</TabItem>

<TabItem value="kotlin">

```java title="App.kt"
Shake.silentReport(description: String,reportData: ShakeReportData, configuration: ShakeReportConfiguration)
```

</TabItem>
</Tabs>

This method allows you to include: Attachments, Metadata, Black box, Activity history and a screenshot in your silent report.
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

```java {2-7,10-23} title="App.java"
public void example() {
  ShakeReportConfiguration configuration = new ShakeReportConfiguration();
  configuration.blackBoxData = true;
  configuration.activityHistoryData = true;
  configuration.screenshot = true;
  Shake.silentReport("description", createShakeReportData(), configuration);
  Shake.setMetadata("key", "value");
}
        
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
```

</TabItem>

<TabItem value="kotlin">

```java {2-7,10-23} title="App.kt"
fun example() {
  val configuration = ShakeReportConfiguration()
  configuration.blackBoxData = true
  configuration.activityHistoryData = true
  configuration.screenshot = true
  Shake.silentReport("description", createShakeReportData(), configuration)
  Shake.setMetadata("key", "value")
}
        
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
ShakeReportConfiguration configuration = new ShakeReportConfiguration();
configuration.showReportSentMessage = true;
```

</TabItem>

<TabItem value="kotlin">

```java title="App.kt"
val configuration = ShakeReportConfiguration()
configuration.showReportSentMessage = true
```

</TabItem>
</Tabs>

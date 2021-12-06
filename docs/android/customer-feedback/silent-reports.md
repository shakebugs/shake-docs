---
id: silent-reports
title: Silent feedback
---
>Send yourself feedback from the app background, without showing Shake UI.

## Overview
You can send silent reports to yourself by calling the `Shake.silentReport` method anywhere after `Shake.start`.

Silent report can be configured with the *Description* just like the regular report and with additional *Attached files*. *ShakeReportConfiguration* determines what kind of data is included in the report.

Call the `Shake.silentReport` method anywhere after `Shake.start`.
Similar to regular user feedback, feel free to add a *Description* or *Attached files*.
*ShakeReportConfiguration* determines which data is included in the report

Silent reports will also attach files returned by the [onPrepareData](android/configuration-and-data/attachments.md) callback.

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
private void sendSilentReport() {
    // highlight-start
    ShakeReportConfiguration configuration = new ShakeReportConfiguration();
    configuration.screenshot = true;
    configuration.blackBoxData = true;
    configuration.activityHistoryData = true;
    
    Shake.silentReport("Description #tag1 #tag2", createShakeReportData(), configuration);
    // highlight-end
}
        
// highlight-start
private ShakeReportData createShakeReportData() {
    return new ShakeReportData() {
        @Override
        public List<ShakeFile> attachedFiles() {
            List<ShakeFile> shakeFiles = new ArrayList<>();
            shakeFiles.add(new ShakeFile(filePath));
            return shakeFiles;
        }
    };
}
// highlight-end
```

</TabItem><TabItem value="kotlin">

```kotlin title="App.kt"
private fun sendSilentReport() {
    // highlight-start
    val configuration = ShakeReportConfiguration()
    configuration.screenshot = true
    configuration.blackBoxData = true
    configuration.activityHistoryData = true
    
    Shake.silentReport("Description #tag1 #tag2", createShakeReportData(), configuration)
    // highlight-end
}
        
// highlight-start
private fun createShakeReportData(): ShakeReportData {
    return ShakeReportData {
        val shakeFiles = ArrayList<ShakeFile>()
        shakeFiles.add(ShakeFile(filePath))
        shakeFiles
    }
}
// highlight-end
```

</TabItem></Tabs>

## Show the Ticket submitted message

To optionally notify your user that a silent report has just been submitted,
change the `ShakeReportConfiguration` and use that configuration object when
sending your silent report with the `Shake.silentReport` method:

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

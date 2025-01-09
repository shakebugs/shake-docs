---
id: silent-user-feedback
title: Silent user feedback
---
>Send yourself feedback from the app background, without showing [Shake UI](android/shake-ui/overview.md).

<p class="p2 mt-40">You're viewing the Android docs. Other platforms →&nbsp;
<a href="/docs/ios/user-feedback/silent-user-feedback/">iOS</a>&nbsp;
<a href="/docs/react/user-feedback/silent-user-feedback/">React Native</a>&nbsp;
<a href="/docs/flutter/user-feedback/silent-user-feedback/">Flutter</a>&nbsp;
<a href="/docs/web/user-feedback/silent-user-feedback/">Web</a>&nbsp;
</p>

## Overview
You can send silent user feedback to yourself by calling the `Shake.silentReport` method anywhere after `Shake.start`. Feel free to add your own description to it as well.

*ShakeReportConfiguration* determines which data is attached to the silent user feedback:
* [Auto attached files](android/configuration-and-data/auto-attach-files.md)
* [Auto screen recording](android/configuration-and-data/auto-screen-recording.md) if the feature is turned on
* Etc.

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
    configuration.video = false;
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
    configuration.video = false
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

To optionally notify your user that a silent user feedback has just been submitted,
change the `ShakeReportConfiguration` and use that configuration object when
sending the silent user feedback with the `Shake.silentReport` method:

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

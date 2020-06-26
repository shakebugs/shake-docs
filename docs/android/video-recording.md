---
id: video-recording
title: Video recording
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This page covers the recording of the screen content.

## Introduction
When a screenshot is not enought the user can make a recording of his screen. This facilitates the developer to recreate the workflow of the user and what led to the issue.
<img
  alt="Attachments screen"
  src={useBaseUrl('screens/bug_screen.png')}
/>


## Usage
By default the screen recording is disabled but can be enabled if the developer desires it. To do that call `Shake.getReportConfiguration().setAutoVideoRecording()` before `Shake.start()`. The second preference that the developer can select is the duration of the video. This value is in seconds and the maximum value is 30 seconds.

Let's look at an example.

You want the user to be able to record a video which will have a maximum duration of 15 seconds.

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
Shake.getReportConfiguration().setAutoVideoRecording(true);
Shake.getReportConfiguration().setAutoVideoRecordingClipDuration(15);
Shake.start(this);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.getReportConfiguration().isAutoVideoRecording = true
Shake.getReportConfiguration().autoVideoRecordingClipDuration = 15
Shake.start(this)
// highlight-end
```

</TabItem>
</Tabs>

When Shake starts a dialog will appear and ask the user if he wants to start recording the video. If the user declines he will be asked again after he has reported a bug and the app has returned to the previous screen.


## Security
The screen recording will be paused when the app goes to background. This way no sensitive user data will be recorded.

---
id: screen-recording
title: Screen recording
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This page covers the recording of screen content.

## Introduction
In situations where a screenshot is just not enough, a user can also make a video recording of his screen. This facilitates the process of recreating the user's workflow and what led to the issue.

<img
  alt="Attachments screen"
  src={useBaseUrl('screens/bug_screen.png')}
/>

## Requirements
Screen recording feature requires `compileSdkVersion` 29 or greater.

To use screen recording feature, you should verify that `compileSdkVersion` and `targetSdkVersion`
are correctly set in the app *build.gradle* file.

## How to use
Screen recording is disabled by default but can be enabled by calling `Shake.getReportConfiguration().setAutoVideoRecording(true)` before `Shake.start()`. 

Duration of the video recording is another preference that can be set. The maximum value is 30 seconds.

Let's look at an example.

You want the user to be able to record a video with a duration of up to 15 seconds.

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

When Shake starts with screen recording enabled, a dialog will appear asking the user if they want to start recording a video. If the user declines they will be asked again after reporting a bug and returning to the previous screen.


## Security

Screen recording is automatically paused when the app goes to background. This way no sensitive user data is recorded.

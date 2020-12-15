---
id: automatic-screen-recording
title: Automatic screen recording
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This page covers the recording of screen content.

## Introduction
In situations where a screenshot is just not enough, a user can also make a video recording of his screen. This facilitates the process of recreating the user's workflow and what led to the issue.

<img
  alt="Attachments screen"
  src={useBaseUrl('screens/bug_screen.png')}
/>


## How to use
Screen recording is disabled by default but can be enabled by calling `Shake.configuration.isAutoVideoRecordingEnabled = true`. 

Duration of the video recording is another preference that can be set. The maximum value is 30 seconds.

Let's look at an example.

You want the user to be able to record a video with a duration of up to 15 seconds.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="ios" defaultValue="swift" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]}><TabItem value="objectivec">

```objectivec title="AppDelegate.m"
//highlight-start
SHKShake.configuration.isAutoVideoRecordingEnabled = true;
SHKShake.configuration.autoVideoRecordingClipDuration = 15;
[SHKShake start];
//highlight-end
```

</TabItem><TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
Shake.configuration.isAutoVideoRecordingEnabled = true
Shake.configuration.autoVideoRecordingClipDuration = 15
Shake.start()
//highlight-end
```

</TabItem></Tabs>

When Shake starts with screen recording enabled, a dialog will appear asking the user if they want to start recording a video. If the user declines they will be asked again after reporting a bug and returning to the previous screen.


## Security

Screen recording is automatically paused when the app goes to background. This way no sensitive user data is recorded.

## iOS version

Screen recording runs on iOS 13+ devices only. Testing on iOS simulator may not work and can produce warnings in console log without screen recording.

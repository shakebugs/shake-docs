---
id: auto-screen-recording
title: Auto screen recording
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>You can rely on your testers to record a video of their screen and attach it to their feedback and crash reports.
Or, you can use auto screen recording to always record their screen and automatically attach that video to the ticket.

<p class="p2 mt-40">You're viewing the iOS docs. Other platforms → &nbsp;
<a href="/docs/android/configuration-and-data/auto-screen-recording/">Android</a>&nbsp;
<a href="/docs/react/configuration-and-data/auto-screen-recording/">React Native</a>&nbsp; 
<a href="/docs/flutter/configuration-and-data/auto-screen-recording/">Flutter</a>&nbsp;  
</p>

:::note
Turn off this feature in production!
:::note

## Enable
Auto screen recording is disabled by default. To enable it:
1. Call `Shake.configuration.isAutoVideoRecording = true` first.
1. Then, start Shake with `Shake.start()`.

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
SHKShake.configuration.isAutoVideoRecordingEnabled = true;
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
Shake.configuration.isAutoVideoRecordingEnabled = true
```

</TabItem>
</Tabs>

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Auto screen recording"
  width="380"
  src={useBaseUrl('img/phone-auto-screenrecording@2x.png')}
/>

</table>

Duration of the auto-attached screen recording is 15 seconds.

:::note
Screen recording works on iOS 13+ devices only.

It may also not work on iOS simulator and could produce console warnings.
:::

## Privacy

With this feature turned on, a system dialog will ask your testers if they want to allow your app
to start capturing everything that's displayed on their screen.

Screen recording is automatically paused when your app goes to background so no third-party data is ever recorded.

Visit [Protect sensitive data](/ios/configuration-and-data/manage-sensitive-data/#auto-screen-recording) to learn
how to hide sensitive data from the auto screen recording.

---
id: automatic-screen-recording
title: Automatic screen recording
---
import useBaseUrl from '@docusaurus/useBaseUrl';

You can rely on testers to record a video of their screen and attach it to their tickets.
Or, you can use this feature to always record their screen and automatically attach that video to the ticket.
Do not use this feature in production!

## Introduction
Shake can constantly record your testers' screens and automatically attach those videos to bug reports. Reports with these videos way easier to debug! 
With this feature turned on, a system dialog will ask testers if they want to allow Shake to start capturing everything that's displayed on their screen.

<img
  alt="Attachments screen"
  src={useBaseUrl('screens/bug_screen.png')}
/>

## How to use
Automatic screen recording is disabled by default but can be enabled by calling `Shake.getReportConfiguration().setAutoVideoRecording(true)`. 
Duration of the automatically attached video is 15 seconds.

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
Shake.start(this);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.getReportConfiguration().isAutoVideoRecording = true
Shake.start(this)
// highlight-end
```

</TabItem>
</Tabs>

## Security

Screen recording is automatically paused when your app goes to the background. This way no third party data is recorded.

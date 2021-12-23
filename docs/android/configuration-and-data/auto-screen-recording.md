---
id: auto-screen-recording
title: Auto screen recording
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>You can rely on your testers to record a video of their screen and attach it to their feedback and crash reports.
Or, you can use this feature to always record their screen and automatically attach that video to the ticket.

:::note
Do not use this feature in production!
:::note

## Enable auto screen recording
Auto screen recording is disabled by default. To enable it:
1. Call `Shake.getReportConfiguration().setAutoVideoRecording(true)` first.
1. Then, start Shake with `Shake.start()`.

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
Shake.getReportConfiguration().setAutoVideoRecording(true);
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.getReportConfiguration().isAutoVideoRecording = true
```

</TabItem>
</Tabs>

Duration of the autp attached screen recording is 15 seconds.

## Privacy

With this feature turned on, a system dialog will ask your testers if they want to allow your app
to start capturing everything that's displayed on their screen.

Screen recording is automatically paused when your app goes to background so no third-party data is ever recorded.
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
Automatic screen recording is disabled by default but can be enabled by calling `Shake.setAutoVideoRecording(true)` before `Shake.start()`. 
Duration of the automatically attached video is 15 seconds.

```javascript title="App.js"
// highlight-next-line
Shake.setAutoVideoRecording(false);
```

:::note

Screen recording runs on iOS 13+ devices only. Testing on iOS simulator may not work and can produce warnings in console log without screen recording.

:::

## Security

Screen recording is automatically paused when your app goes to the background. This way no third party data is recorded.

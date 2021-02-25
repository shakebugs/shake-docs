---
id: silent-reports
title: Silent reports
---
This page explains how to submit yourself a bug report from the background, without interrupting your end user whatsoever.

## Overview
You can send silent reports to yourself by calling the `Shake.silentReport()` method anywhere after `Shake.start()`.

This method allows you to include: [Description and screenshot](react/screenshot.md), [Attachments](react/attachments.md), [Metadata](react/metadata.md) and [Activity history](react/activity.md) in your silent report.
If you decide to do so, your code should look something like this example:

```javascript title="App.js"
// highlight-next-line
import Shake, {ShakeFile, ShakeReportConfiguration} from '@shakebugs/react-native-shake';

const sendSilentReport = () => {
    // highlight-start
    const configuration = new ShakeReportConfiguration();
    configuration.blackBoxData = true;
    configuration.activityHistoryData = true;
    configuration.screenshot = true;

    Shake.silentReport(
        "Description #tag1 #tag2", 
        [ShakeFile.create(path)],
        configuration);
     // highlight-end
}
```

## Show the *Bug submitted* message
Silent reports are programmatic and no Shake UI is shown.
However, you can choose to display a small and non-intrusive message saying
`Done. Bug submitted successfully.` on the bottom of a users screen once the report has been submitted:

```javascript title="App.js"
// highlight-start
const configuration = new ShakeReportConfiguration();
configuration.showReportSentMessage = true;
// highlight-end
```

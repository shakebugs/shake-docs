---
id: silent-reports
title: Silent reports
---
This page explains how to submit yourself a bug report from the background, without interrupting your end user whatsoever.

:::caution

Silent reports are not available for Android apps, it will be available in the next version of React Native SDK.

:::

## Overview
You can send silent reports to yourself by calling the `Shake.silentReport()` method anywhere after `Shake.start()`:

This method allows you to include: Attachments, Quick facts, Black box, Activity history and a screenshot in your silent report.
If you decide to do so, your code should look something like this example:

```javascript title="App.js"
// highlight-next-line
import Shake, {ShakeFile, ShakeReportConfiguration} from '@shakebugs/react-native-shake';

const bugReport = () => {
    // highlight-start
    const configuration = new ShakeReportConfiguration();
    configuration.blackBoxData = true;
    configuration.activityHistoryData = true;
    configuration.screenshot = true;

    Shake.silentReport(
        "Bug description", 
        [ShakeFile.create(path)],
        "Quick facts",
        configuration);
     // highlight-end
}
```

## Bug submitted message
Silent reports are programmatic and no Shake UI is shown.
However, you can choose to display a small and non-intrusive message saying
`Done. Bug submitted successfully.` on the bottom of a users screen once the report has been submitted:

```javascript title="App.js"
import Shake, {ShakeFile, ShakeReportConfiguration} from '@shakebugs/react-native-shake';

const bugReport = () => {
    const configuration = new ShakeReportConfiguration();
    configuration.blackBoxData = true;
    configuration.activityHistoryData = true;
    configuration.screenshot = true;
        // highlight-next-line
    configuration.showReportSentMessage = true;

    Shake.silentReport(
        "Bug description", 
        [ShakeFile.create(path)],
        "Quick facts",
        configuration);
}
```

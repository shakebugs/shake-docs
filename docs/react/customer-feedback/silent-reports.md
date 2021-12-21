---
id: silent-reports
title: Silent reports
---
This page explains how to submit yourself a bug report from the background, without interrupting your end user whatsoever.

## Overview
You can send silent reports to yourself by calling the `Shake.silentReport` method anywhere after `Shake.start`.

Silent report can be configured with the *Description* just like the regular report and with additional *Attached files*.

*ShakeReportConfiguration* determines what kind of data is included in the report.

:::note

Silent reports will also attach files defined with the [Shake.setShakeReportData](react/configuration-and-data/attachments.md) method and [Automatic Screen Recording](react/configuration-and-data/automatic-screen-recording.md) file if the feature is turned on.

:::

```javascript title="App.js"
// highlight-next-line
import Shake, {ShakeFile, ShakeReportConfiguration} from '@shakebugs/react-native-shake';

const sendSilentReport = () => {
    // highlight-start
    const configuration = new ShakeReportConfiguration();
    configuration.blackBoxData = true;
    configuration.activityHistoryData = true;
    configuration.screenshot = true;
    configuration.video = false;

    Shake.silentReport(
        'Description #tag1 #tag2', 
        [ShakeFile.create(path)],
        configuration);
     // highlight-end
}
```

## Show the *Ticket submitted* message

Silent reports are sent without showing the Shake.

They can be used in the situations where displaying the Shake is not an option but user input and attached files can still be obtained.

If your app user is aware of the silent report being sent, Shake can display a small and non-intrusive message notifying the user that the report was sent.

To display a small toast after sending the report, follow to below example to change the `ShakeReportConfiguration` and use that configuration object when 
sending your silent report with the `Shake.silentReport` method.

```javascript title="App.js"
// highlight-start
const configuration = new ShakeReportConfiguration();
configuration.showReportSentMessage = true;
// highlight-end
```

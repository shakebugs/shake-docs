---
id: silent-reports
title: Silent reports
---
This page explains how to submit yourself a bug report from the background, without interrupting your end user whatsoever.

## Overview
You can send silent reports to yourself by calling the `Shake.silentReport()` method anywhere after `Shake.start()`, as shown below:

```dart title="lib/main.dart"
// highlight-start
Shake.silentReport(
  ShakeReportConfiguration configuration,
  {String description,
  String quickFacts,
  List<ShakeFile> shakeFiles});
// highlight-end
```

This method allows you to include: [Description and screenshot](flutter/screenshot.md), [Attachments](flutter/attachments.md), [Quick facts](flutter/quick-facts.md) and [Activity history](flutter/activity.md) in your silent report.
If you decide to do so, your code should look something like this example:

```dart title="lib/main.dart"
// highlight-start
import 'package:shake_flutter/models/shake_file.dart';
import 'package:shake_flutter/models/shake_report_configuration.dart';
import 'package:shake_flutter/shake_flutter.dart';
// highlight-end

_sendSilentReport() {
    // highlight-start
    List<ShakeFile> shakeFiles = List();
    shakeFiles.add(ShakeFile.create(deviceLogs.path));
    shakeFiles.add(ShakeFile.create(userLogs.path));
    // highlight-end

    // highlight-start
    ShakeReportConfiguration configuration = ShakeReportConfiguration();
    configuration.blackBoxData = true
    configuration.activityHistoryData = true
    configuration.screenshot = true
    // highlight-end

    // highlight-start
    Shake.silentReport(
      configuration,
      description: "Description #tag1 #tag2",
      quickFacts: "Quick facts",
      shakeFiles: shakeFiles,
    );
    // highlight-end
}
```

:::note

On iOS, the quick facts data stored in your silent report will be replaced with the quick facts set with the `Shake.setShakeReportData()` method.
If you want to send custom quick facts using the silent report method, you should call `Shake.setShakeReportData()` before sending a silent report.

:::

## Show the *Bug submitted* message
Silent reports are programmatic and no Shake UI is shown.
However, you can choose to display a small and non-intrusive message saying
*Done. Bug submitted successfully.* on the bottom of a users screen once the report has been submitted:

```dart title="lib/main.dart"
// highlight-start
ShakeReportConfiguration configuration = ShakeReportConfiguration();
configuration.showReportSentMessage = true;
// highlight-end
```

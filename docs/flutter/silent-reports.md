---
id: silent-reports
title: Silent reports
---
This page explains how to submit yourself a bug report from the background, without interrupting your end user whatsoever.

## Overview
You can send silent reports to yourself by calling the `Shake.silentReport()` method anywhere after `Shake.start()`, as shown below:

```dart title="lib/main.dart"
// highlight-start
import 'package:shake_flutter/models/shake_file.dart';
import 'package:shake_flutter/models/shake_report_configuration.dart';
import 'package:shake_flutter/shake_flutter.dart';
// highlight-end

_reportSilently() {
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
      description: "Bug Description",
      quickFacts: "Quick facts",
      shakeFiles: shakeFiles,
    );
    // highlight-end
}
```

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

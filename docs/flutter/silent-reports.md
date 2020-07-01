---
id: silent-reports
title: Silent reports
---
This page explains how to submit yourself a bug report from the background, without interrupting your end user whatsoever.

## Overview
You can send silent reports to yourself by calling the `Shake.silentReport()` method anywhere after `Shake.start()`, as shown below:

```dart title="lib/main.dart"
 _reportSilent() {
    List<ShakeFile> shakeFiles = List();
    shakeFiles.add(ShakeFile.create(file1.path));
    shakeFiles.add(ShakeFile.create(file2.path, "customName"));

    ShakeReportConfiguration configuration = ShakeReportConfiguration();

    Shake.silentReport("Description", shakeFiles, "Quick facts", configuration);
  }
```
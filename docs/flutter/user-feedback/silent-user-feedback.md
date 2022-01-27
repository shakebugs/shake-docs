---
id: silent-user-feedback
title: Silent user feedback
---
>Send yourself feedback from the app background, without showing [Shake UI](/flutter/shake-ui/overview.md).

## Overview
You can send silent user feedback to yourself by calling the `Shake.silentReport` method anywhere after `Shake.start`. Feel free to add your own description to it as well.

*ShakeReportConfiguration* determines which data is attached to the silent user feedback:
* [Auto attached files](/flutter/configuration-and-data/auto-attach-files.md)
* [Auto screen recording](/flutter/configuration-and-data/auto-screen-recording.md) if the feature is turned on
* Etc.

```dart title="main.dart"
// highlight-start
import 'package:shake_flutter/models/shake_file.dart';
import 'package:shake_flutter/models/shake_report_configuration.dart';
import 'package:shake_flutter/shake_flutter.dart';
// highlight-end

void sendSilentReport() {
    // highlight-start
    ShakeReportConfiguration configuration = ShakeReportConfiguration();
    configuration.blackBoxData = true;
    configuration.activityHistoryData = true;
    configuration.screenshot = true;
    configuration.video = false;
    
    Shake.silentReport(
        configuration: configuration,
        description: 'Description #tag1 #tag2',
        shakeFiles: [ShakeFile.create(path)],
    );
    // highlight-end
}
```

## Show the Ticket submitted message

To optionally notify your user that a silent user feedback has just been submitted,
change the `ShakeReportConfiguration` and use that configuration object when
sending the silent user feedback with the `Shake.silentReport` method:

```dart title="main.dart"
// highlight-start
ShakeReportConfiguration configuration = ShakeReportConfiguration();
configuration.showReportSentMessage = true;
// highlight-end
```

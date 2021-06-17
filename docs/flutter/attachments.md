---
id: attachments
title: Attachments
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Files can be attached visually by users or programmatically by code.
You can instruct the SDK to quietly attach any file to a report.
The files you attach are not visible to the user in the SDK.

## Introduction
Send yourself XMPP logs, a user's profile photo, or whatever helps you debug issues faster.
You will see these files in the center of your web Dashboard along with files the user maybe attached themselves.

<img
  alt="Attachments screen"
  src={useBaseUrl('screens/attachments_screen.png')}
/>

## Methods
You can quietly attach files by using any of the methods described below.

### Attaching a file with a default name
Files can be attached with an absolute file path to your file.
If you attach files this way, the filename shown on the web Dashboard
will be determined automatically from the passed file's name.

To attach files this way, call the `Shake.setShakeReportData()` method as shown in the example below.
Be careful though, any subsequent calls will override former ones already in place:

```dart title="main.dart"
// highlight-start
import 'package:shake_flutter/shake_flutter.dart';
import 'package:shake_flutter/models/shake_file.dart';
// highlight-end

void attachLogFiles(String username) {
    // highlight-start
    List<ShakeFile> shakeFiles = [];
    shakeFiles.add(ShakeFile.create(userFile.path));
    shakeFiles.add(ShakeFile.create(deviceFile.path));

    Shake.setShakeReportData(shakeFiles);
    // highlight-end

}
```

### Attaching a file with a custom name
Files can be attached with the desired filename and an absolute file path to your file.

In order to attach files this way, call `Shake.setShakeReportData()` method as shown in the example below.
But be careful only to call it once, since any subsequent calls will override the former ones.

```dart title="main.dart"
// highlight-start
import 'package:shake_flutter/shake_flutter.dart';
import 'package:shake_flutter/models/shake_file.dart';
// highlight-end

void attachLogFiles(String username) {
    // highlight-start
    List<ShakeFile> shakeFiles = [];
    shakeFiles.add(ShakeFile.create(userFile.path, 'userLogs'));
    shakeFiles.add(ShakeFile.create(deviceFile.path, 'deviceLogs'));

    Shake.setShakeReportData(shakeFiles);
    // highlight-end
}
```

## Limitations
The maximum number of attached files per bug is 1 for Free workspaces and 10 for Premium ones.
If more files are attached, the SDK will successfully upload only some of them.

The maximum allowed individual size for any of those files is 10 MB.
If you attach a file that's larger than that it won't be uploaded with the report.

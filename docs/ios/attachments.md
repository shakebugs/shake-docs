---
id: attachments
title: Attachments
---
You can instruct the SDK to quietly attach any file to a bug report. 
The files you attach are not visible to the user in the SDK.

## Introduction
By default, a bug report contains only files that the user attaches to it. 
However, you can instruct Shake SDK to create and attach custom files that you need, for example, 
XMPP logs, a user's profile photo, or whatever you might want to inspect later on.
All attached files will appear in the center of your web Dashboard.

![Attachments screen](/screens/attachments_screen.png)

## Methods
### Attaching a file with a custom name and data
`ShakeFile` can be initialized with a filename and data.
As custom data is provided, the file name cannot be automatically detected so it's mandatory.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec {4-8} title="AppDelegate.m"
NSString *fileName = ...
NSData *fileData = ...

[[SHKShake sharedInstance] setOnPrepareData:^SHKShakeReportData * _Nonnull(SHKShakeReportData * _Nonnull reportData) {
  SHKShakeFile *attachedFile = [[SHKShakeFile alloc] initWithName:fileName andData:fileData];
  reportData.attachedFiles = @[attachedFile];
  return reportData;
}];
```

</TabItem>

<TabItem value="swift">

```swift {4-8} title="AppDelegate.swift"
let fileName: String = ...
let logData: Data = ...

Shake.sharedInstance().onPrepareData = { shakeReportData in
  let attachedFile = ShakeFile(name: fileName, andData: fileData)
  shakeReportData.attachedFiles = [attachedFile]
  return shakeReportData
}
```

</TabItem>
</Tabs>

### Attaching a file with a default name
Files can be attached with a local url to your file. 
If you attach files this way, the filename shown on the web Dashboard 
will be determined automatically from the passed file's name.

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec {3-7} title="AppDelegate.m"
NSURL *fileUrl = ...

[[SHKShake sharedInstance] setOnPrepareData:^SHKShakeReportData * _Nonnull(SHKShakeReportData * _Nonnull reportData) {
  SHKShakeFile *attachedFile = [[SHKShakeFile alloc] initWithFileURL:fileUrl];
  reportData.attachedFiles = @[attachedFile];
  return reportData;
}];
```

</TabItem>

<TabItem value="swift">

```swift {3-8} title="AppDelegate.swift"
let fileUrl: URL = ...

Shake.sharedInstance().onPrepareData = { shakeReportData in
  if let attachedFile = ShakeFile(fileURL: fileUrl) {
    shakeReportData.attachedFiles = [attachedFile]
  }
  return shakeReportData
}
```

</TabItem>
</Tabs>

### Attaching a file with a custom name
`ShakeFile` can be initialized with a desired filename and an a local url to your file.

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec {4-8} title="AppDelegate.m"
NSString *fileName = ...
NSURL *fileUrl = ...

[[SHKShake sharedInstance] setOnPrepareData:^SHKShakeReportData * _Nonnull(SHKShakeReportData * _Nonnull reportData) {
  SHKShakeFile *attachedFile = [[SHKShakeFile alloc] initWithName:fileName andFileURL:fileUrl];
  reportData.attachedFiles = @[attachedFile];
  return reportData;
}];
```

</TabItem>

<TabItem value="swift">

```swift {4-9} title="AppDelegate.swift"
let fileName: String = ...
let fileUrl: URL = ...

Shake.sharedInstance().onPrepareData = { shakeReportData in
  if let attachedFile = ShakeFile(name: fileName, andFileURL: fileUrl) {
    shakeReportData.attachedFiles = [attachedFile]
  }
  return shakeReportData
}
```

</TabItem>
</Tabs>

## Limitations
The maximum number of attached files per bug is 1 for Free workspaces and 10 for Premium ones. 
If more files are attached, the SDK will successfully upload only some of them.

The maximum allowed individual size for any of those files is 5 MB.
If you attach a file that's larger than that it won't be uploaded with the report.

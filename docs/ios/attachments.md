---
id: attachments
title: Attachments
---
import useBaseUrl from '@docusaurus/useBaseUrl';

You can instruct the SDK to quietly attach any file to a bug report.
The files you attach are *not* visible to the user in the SDK.

## Introduction
Send yourself XMPP logs, a user's profile photo, or whatever helps you debug issues faster.
You will see these files in the center of [your web Dashboard](https://app.shakebugs.com):

<img
  alt="Attachments screen"
  src={useBaseUrl('screens/attachments_screen.png')}
/>

## Methods
You can quietly attach files by using any of the methods described below.

### Setting a custom filename and adding data
*ShakeFile* can be initialized with a filename (String) and data (NSData / Data).
As custom data is provided, the file name cannot be automatically detected so it's mandatory:

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

```objectivec
NSString *fileName = ...
NSData *fileData = ...

SHKShake.onPrepareReportData = ^SHKShakeReportData *_Nonnull(SHKShakeReportData *_Nonnull reportData) {
  SHKShakeFile *attachedFile = [[SHKShakeFile alloc] initWithName:fileName andData:fileData];
  reportData.attachedFiles = @[attachedFile];
  return reportData;
};
```

</TabItem>

<TabItem value="swift">

```swift
let fileName: String = ...
let logData: Data = ...

Shake.onPrepareReportData = { shakeReportData in
  let attachedFile = ShakeFile(name: fileName, andData: fileData)
  shakeReportData.attachedFiles = [attachedFile]
  return shakeReportData
}
```

</TabItem>
</Tabs>

### Setting a custom filename and then attaching a file
*ShakeFile* can also be initialized with a desired filename (String) and a local url (NSURL) to your file:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec
NSString *fileName = ...
NSURL *fileUrl = ...

SHKShake.onPrepareReportData = ^SHKShakeReportData *_Nonnull(SHKShakeReportData *_Nonnull reportData) {
  SHKShakeFile *attachedFile = [[SHKShakeFile alloc] initWithName:fileName andFileURL:fileUrl];
  reportData.attachedFiles = @[attachedFile];
  return reportData;
};
```

</TabItem>

<TabItem value="swift">

```swift
let fileName: String = ...
let fileUrl: URL = ...

Shake.onPrepareReportData = { shakeReportData in
  if let attachedFile = ShakeFile(name: fileName, andFileURL: fileUrl) {
    shakeReportData.attachedFiles = [attachedFile]
  }
  return shakeReportData
}
```

</TabItem>
</Tabs>

### Just attaching a file
Or, you can initialize *ShakeFile* only with a local file url (NSURL),
and the file name shown on the web Dashboard will be determined automatically from the passed file's URL:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec
NSURL *fileUrl = ...

SHKShake.onPrepareReportData = ^SHKShakeReportData *_Nonnull(SHKShakeReportData *_Nonnull reportData) {
  SHKShakeFile *attachedFile = [[SHKShakeFile alloc] initWithFileURL:fileUrl];
  reportData.attachedFiles = @[attachedFile];
  return reportData;
};
```

</TabItem>

<TabItem value="swift">

```swift
let fileUrl: URL = ...

Shake.onPrepareReportData = { shakeReportData in
  if let attachedFile = ShakeFile(fileURL: fileUrl) {
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

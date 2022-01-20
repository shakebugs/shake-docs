---
id: silent-user-feedback
title: Silent user feedback
---
>Send yourself feedback from the app background, without showing [Shake UI](/ios/shake-ui/overview).

## Overview
You can send silent user feedback to yourself by calling the `Shake.silentReport` method anywhere after `Shake.start`. Feel free to add your own description to it as well.

*SHKShakeReportConfiguration* determines which data is attached to the silent user feedback:
* [Auto attached files](/ios/configuration-and-data/auto-attach-files.md)
* [Auto screen recording](/ios/configuration-and-data/auto-screen-recording.md) if the feature is turned on
* Etc.

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

```java title="App.m"
//highlight-start
SHKShakeReportConfiguration *conf = SHKShakeReportConfiguration.new;

conf.includesActivityHistoryData = true; 
conf.includesBlackBoxData = true; 
conf.includesScreenshotImage = true; 
conf.includesVideo = false;

NSArray<SHKShakeFile *> * (^fileAttachBlock)(void) = ^NSArray<SHKShakeFile *> *(void) {
SHKShakeFile *file = [[SHKShakeFile alloc] initWithName:@"myFile.log" andData:NSData.new];

  return @[file];
};
  
[SHKShake silentReportWithDescription:@"Description #tag1 #tag2" fileAttachBlock:fileAttachBlock reportConfiguration:conf];
//highlight-end
```

</TabItem><TabItem value="swift">

```swift title="App.swift"
//highlight-start
let conf = ShakeReportConfiguration()

conf.includesScreenshotImage = true
conf.includesBlackBoxData = true
conf.includesActivityHistoryData = true
conf.includesVideo = false;

let fileAttachBlock: () -> [ShakeFile] = {
    let file = ShakeFile(name: "myFile.log", data: Data())
    return [file]
}

Shake.silentReport(description: "Description #tag1 #tag2", fileAttachBlock: fileAttachBlock, reportConfiguration: conf)

//highlight-end
```

</TabItem></Tabs>

## Show the Ticket submitted message

To optionally notify your user that a silent user feedback has just been submitted,
change the `SHKShakeReportConfiguration` and use that configuration object when
sending the silent user feedback with the `Shake.silentReport` method:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```java title="App.m"
//highlight-start 
SHKShakeReportConfiguration *reportConfiguration = SHKShakeReportConfiguration.new; reportConfiguration.showsToastMessageOnSend = true; 
//highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
//highlight-start
let reportConfiguration = ShakeReportConfiguration()
reportConfiguration.showsToastMessageOnSend = true
//highlight-end
```

</TabItem>
</Tabs>

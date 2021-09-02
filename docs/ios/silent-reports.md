---
id: silent-reports
title: Silent reports
---
This page explains how to submit yourself a bug report from the background, without interrupting your end user whatsoever.

## Overview
You can send silent reports to yourself by calling the `Shake.silentReport` method anywhere after `Shake.start`.

Silent report can be configured with the *Description* just like the regular report and with additional *Attached files*.

*SHKShakeReportConfiguration* determines what kind of data is included in the report.

:::note

Silent reports will also attach files returned by the [onPrepareReportData](ios/attachments.md) closure and [Automatic Screen Recording](ios/automatic-screen-recording.md) file if the feature is turned on.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="ios" defaultValue="swift" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]}><TabItem value="objectivec">

```objectivec title="AppDelegate.m"
//highlight-start

SHKShakeReportConfiguration *conf = SHKShakeReportConfiguration.new;

conf.includesActivityHistoryData = true;
conf.includesBlackBoxData = true;
conf.includesScreenshotImage = true;

NSArray<SHKShakeFile *> * (^fileAttachBlock)(void) = ^NSArray<SHKShakeFile *> *(void) {

    SHKShakeFile *file = [[SHKShakeFile alloc] initWithName:@"myFile.log" andData:NSData.new];

    return @[file];
};

[SHKShake silentReportWithDescription:@"Description #tag1 #tag2" fileAttachBlock:fileAttachBlock reportConfiguration:conf];

//highlight-end
```

</TabItem><TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start

let conf = ShakeReportConfiguration()

conf.includesScreenshotImage = true
conf.includesBlackBoxData = true
conf.includesActivityHistoryData = true

let fileAttachBlock: () -> [ShakeFile] = {
    let file = ShakeFile(name: "myFile.log", data: Data())
    return [file]
}

Shake.silentReport(description: "Description #tag1 #tag2", fileAttachBlock: fileAttachBlock, reportConfiguration: conf)

//highlight-end
```

</TabItem></Tabs>


## Show the *Ticket submitted* message

Silent reports are sent without showing the ShakeUI.

They can be used in the situations where displaying the ShakeUI is not an option but user input and attached files can still be obtained.

If your app user is aware of the silent report being sent, Shake can display a small and non-intrusive message notifying the user that the report was sent.

To display a small toast after sending the report, follow to below example to change the `SHKShakeReportConfiguration` and use that configuration object when 
sending your silent report with the `Shake.silentReport` method.

<Tabs groupId="ios" defaultValue="swift" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]}><TabItem value="objectivec">

```objectivec title="AppDelegate.m"
//highlight-start
SHKShakeReportConfiguration *reportConfiguration = SHKShakeReportConfiguration.new;
reportConfiguration.showsToastMessageOnSend = true;
//highlight-end
```

</TabItem><TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
let reportConfiguration = ShakeReportConfiguration()
reportConfiguration.showsToastMessageOnSend = true
//highlight-end
```

</TabItem></Tabs>


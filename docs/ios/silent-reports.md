---
id: silent-reports
title: Silent reports
---
This page explains how to submit yourself a bug report from the background, without interrupting your end user whatsoever.

## Overview
You can send silent reports to yourself by calling the `Shake.silentReport()` method anywhere after `Shake.start()`.

This method allows you to include: [Description and screenshot](ios/screenshot.md), [Attachments](ios/attachments.md), [Metadata](ios/metadata.md) and [Activity history](ios/activity.md) in your silent report.
If you decide to do so, your code should look something like this example:


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="ios" defaultValue="swift" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]}><TabItem value="objectivec">

```objectivec title="AppDelegate.m"
//highlight-start
SHKShakeReportData *reportData = [[SHKShakeReportData alloc] initWithBugDescription:@"Description #tag1 #tag2" attachedFiles:@[]];

SHKShakeReportConfiguration *reportConfiguration = [[SHKShakeReportConfiguration alloc] init];
reportConfiguration.includesScreenshotImage = YES;
reportConfiguration.includesBlackBoxData = YES;

[SHKShake silentReportWithReportData:reportData reportConfiguration:reportConfiguration];
[SHKShake setMetadataWithKey: @"key" value: @"value"];
//highlight-end
```

</TabItem><TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-start
let reportData = ShakeReportData(bugDescription: "Description #tag1 #tag2", attachedFiles: [])

let reportConfiguration = ShakeReportConfiguration()
reportConfiguration.includesScreenshotImage = true
reportConfiguration.includesBlackBoxData = true

Shake.silentReport(reportData: reportData, reportConfiguration: reportConfiguration)
Shake.setMetadata(key: "key", value: "value")
//highlight-end
```

</TabItem></Tabs>


## Show the *Bug submitted* toast
Silent reports are programmatic and no Shake UI is shown.
However, you can choose to display a small and non-intrusive message saying
*Done. Bug submitted successfully.* on the bottom of a users screen once the report has been submitted:
<Tabs groupId="ios" defaultValue="swift" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]}><TabItem value="objectivec">

```objectivec title="AppDelegate.m"
//highlight-start
SHKShakeReportConfiguration *reportConfiguration = [[SHKShakeReportConfiguration alloc] init];
reportConfiguration.showsToastMessageOnSend = YES;
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


---
id: silent-reports
title: Silent reports
---
This page explains how to submit a bug report from the background, without interrupting or requiring user interaction whatsoever.

## Overview
You can send silent reports by calling the `Shake.silentReport()` method anywhere after `Shake.start()`.

This method allows you to include: [Attachments](ios/attachments.md), [Activity history](ios/activity.md) and a screenshot in your silent report.
If you decide to do so, your code should look something like this example:


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="ios" defaultValue="swift" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]}><TabItem value="objectivec">

```objectivec title="AppDelegate.m"
SHKShakeReportData *reportData = [[SHKShakeReportData alloc] initWithBugDescription:@"Broken UI" attachedFiles:@[]];

SHKShakeReportConfiguration *reportConfiguration = [[SHKShakeReportConfiguration alloc] init];
reportConfiguration.includesScreenshotImage = YES;
reportConfiguration.includesBlackBoxData = YES;

[SHKShake silentReportWithReportData:reportData reportConfiguration:reportConfiguration];
```

</TabItem><TabItem value="swift">

```swift title="AppDelegate.swift"
let reportData = ShakeReportData(bugDescription: "Broken UI", attachedFiles: [])

let reportConfiguration = ShakeReportConfiguration()
reportConfiguration.includesScreenshotImage = true
reportConfiguration.includesBlackBoxData = true

Shake.silentReport(reportData: reportData, reportConfiguration: reportConfiguration)
```

</TabItem></Tabs>


## Show the *Bug submitted* toast
Silent reports are programmatic and no Shake UI is shown.
However, you can choose to display a small and non-intrusive message saying
*Done. Bug submitted successfully.* on the bottom of a users screen once the report has been submitted:
<Tabs groupId="ios" defaultValue="swift" values={[{ label: 'Objective-C', value: 'objectivec'},{ label: 'Swift', value: 'swift'},]}><TabItem value="objectivec">

```objectivec title="AppDelegate.m"
SHKShakeReportConfiguration *reportConfiguration = [[SHKShakeReportConfiguration alloc] init];
reportConfiguration.showsToastMessageOnSend = YES;
```

</TabItem><TabItem value="swift">

```swift title="AppDelegate.swift"
let reportConfiguration = ShakeReportConfiguration()
reportConfiguration.showsToastMessageOnSend = true
```

</TabItem></Tabs>


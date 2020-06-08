---
id: quick-facts
title: Quick facts
---
This page explains how to send a value of any variable you wish from a user's app to your web Dashboard.

## Introduction
Every app is unique so the [Essentials](ios/essentials.md) sent with each bug report are often not enough. 
That's why the Shake SDK allows you to send yourself any custom data from the app using Quick facts.
It's a text object which you can shape any way you want, and you can put anything you want into it.

This is where you will see Quick facts on your web Dashboard:

![Quick facts screen](/screens/quick_facts_screen.png)

## Usage
In the `AppDelegate` add `onPrepareData` closure, and fill the `quickFacts` string with 
the data you want to receive on your web Dashboard.

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

```objectivec title="AppDelegate.m"
[[SHKShake sharedInstance] setOnPrepareData:^SHKShakeReportData *
  _Nonnull(SHKShakeReportData * _Nonnull reportData) {
    reportData.quickFacts = [NSString stringWithFormat:@"Current user is %@", userId];
    return reportData;
}];
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
Shake.sharedInstance().onPrepareData = {
  reportData in
    reportData.quickFacts = "Current user is \(userId)”
    return reportData
}
```

</TabItem>
</Tabs>

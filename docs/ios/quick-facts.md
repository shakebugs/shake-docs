---
id: quick-facts
title: Quick facts
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This page explains how to send a value of any variable you wish from a user's app to your web Dashboard.

## Introduction
Every app is unique so the [Essentials](/ios/essentials.md) sent with each bug report are often not enough.
That's why the Shake SDK allows you to send yourself any custom data from the app using Quick facts.
It's a *String* object which you can shape any way you want, and you can put anything you want into it.

## How to use
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

```objectivec
SHKShake.onPrepareReportData = ^SHKShakeReportData *_Nonnull(SHKShakeReportData *_Nonnull reportData) {
    reportData.quickFacts = [NSString stringWithFormat:@"Current user is %@", userId];
    return reportData;
};
```

</TabItem>

<TabItem value="swift">

```swift
Shake.onPrepareReportData = { reportData in
    reportData.quickFacts = "Current user is \(userId)”
    return reportData
}
```

</TabItem>
</Tabs>

This is where you will see Quick facts on your web Dashboard:

<img
  alt="Quick facts screen"
  src={useBaseUrl('screens/quick_facts_screen.png')}
/>

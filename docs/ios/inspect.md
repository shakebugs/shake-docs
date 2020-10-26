---
id: inspect
title: Inspect bug
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The *Inspect bug* screen allows users to see the details of a bug from their device without reporting it.

## Introduction
Your users can inspect a bug — see its [Essentials](/ios/essentials.md) and [Quick facts](ios/quick-facts.md) — before submitting it. The *Inspect bug* screen is part of the SDK *Wrap-up* screen:

<img
  alt="Attachments screen"
  src={useBaseUrl('screens/inspect_screen.png')}
/>


## Hide the *Inspect bug* screen
If you don’t want the screen to show when submitting a bug report, you can hide it using the following method:

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
//highlight-next-line
SHKShake.configuration.isInspectScreenEnabled = NO;
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
//highlight-next-line
Shake.configuration.isInspectScreenEnabled = false
```

</TabItem>
</Tabs>

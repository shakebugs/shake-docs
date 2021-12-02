---
id: inspect
title: Inspect ticket
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The *Inspect screen* allows your user to see the current ticket details — its [Essentials](ios/configuration-and-data/essentials.md) and [Metadata](ios/configuration-and-data/metadata.md) — before submitting it.

## Introduction

The *Inspect screen* can be reached via *Inspect* button on the [New ticket screen](ios/screens/new-ticket-screen.md).

<img
  alt="Inspect screen"
  src={useBaseUrl('screens/new_screen.png')}
/>

## Hide the *Inspect* button

If you don’t want to show *Inspect* button  to a user, hide it using the following method:

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

<TabItem value="swift">

```java title="AppDelegate.swift"
// highlight-next-line
Shake.configuration.isInspectScreenEnabled = false;
```

</TabItem>

<TabItem value="objectivec">

```kotlin title="AppDelegate.m"
// highlight-next-line
SHKShake.configuration.isInspectScreenEnabled = false;
```

</TabItem>
</Tabs>

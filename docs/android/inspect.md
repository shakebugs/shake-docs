---
id: inspect
title: Inspect Bug
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The Inspect bug screen allows users to see the details of a bug from their device without reporting it.

## Introduction
Your users can inspect a bug — see its [Essentials](/android/essentials.md) and [Metadata](android/metadata.md) — before submitting it.
The *Inspect bug* screen is part of the SDK *Wrap-up* screen:

<img
  alt="Inspect screen"
  src={useBaseUrl('screens/inspect_screen.png')}
/>


## Hide the *Inspect bug* screen
If you don’t want the screen to show when submitting a bug report, you can hide it using the following method:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="App.java"
// highlight-next-line
Shake.getReportConfiguration().setEnableInspectScreen(false);
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.getReportConfiguration().isEnableInspectScreen = false
```

</TabItem>
</Tabs>

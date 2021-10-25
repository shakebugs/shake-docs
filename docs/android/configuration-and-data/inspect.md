---
id: inspect
title: Inspect ticket
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The *Inspect screen* allows your user to see the current ticket details — its [Essentials](android/essentials.md) and [Metadata](android/metadata.md) — before submitting it.

## Introduction

The *Inspect screen* can be reached via *Inspect* button on the [New ticket screen](android/new-ticket-screen.md).

<img
  alt="Inspect screen"
  src={useBaseUrl('screens/new_screen.png')}
/>

## Hide the *Inspect* button

If you don’t want to show *Inspect* button  to a user, hide it using the following method:

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

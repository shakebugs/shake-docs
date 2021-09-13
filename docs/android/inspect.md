---
id: inspect
title: Inspect ticket
---
import useBaseUrl from '@docusaurus/useBaseUrl';

The *Inspect ticket* screen allows users to see the details of report attached to the current ticket.

## Introduction
Your users can inspect the current ticket — see its [Essentials](android/essentials.md) and [Metadata](android/metadata.md) — before submitting it.

The *Inspect screen* can be reached via *Inspect* button on the [New ticket screen](android/new-ticket-screen.md).

<img
  alt="Inspect screen"
  src={useBaseUrl('screens/new_screen.png')}
/>

## Hide the *Inspect* button
If you don’t want to show inspect button when submitting a new ticket, you can hide it using the following method:

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

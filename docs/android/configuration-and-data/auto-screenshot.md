---
id: auto-screenshot
title: Auto screenshot
---
import useBaseUrl from '@docusaurus/useBaseUrl';

> When Shake's New ticket screen is invoked, a screenshot is automatically attached to it.

:::note

Jetpack Compose is a declarative UI toolkit, a paradigm shift from the current View system.
Shake supports capturing Jetpack Compose screens excepting components like LazyColumn, LazyRow Scaffold and Shapes.
On Android O devices, Shake supports capturing excepted components excluding in dialogs.

:::

## Disable

Let's suppose you are invoking Shake through code from the **Settings → Help** screen of your app. You would always receive the same 
screenshot and it wouldn't be related to all sorts of reported tickets in any way.

Disable auto screenshot using the following snippet:

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
Shake.getReportConfiguration().setScreenshotIncluded(false);
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.getReportConfiguration().isScreenshotIncluded = false
```

</TabItem>
</Tabs>
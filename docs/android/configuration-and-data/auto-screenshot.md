---
id: auto-screenshot
title: Auto screenshot
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This page covers the screenshot.

## Introduction
You will find screenshot at the top of your [Dashboard](https://app.shakebugs.com).

:::note

Jetpack Compose is a declarative UI toolkit, a paradigm shift from the current View system.
Shake supports capturing Jetpack Compose screens excepting components like LazyColumn, LazyRow Scaffold and Shapes.
On Android O devices, Shake supports capturing excepted components excluding in dialogs.

:::

## User drawing on the screenshot
When users shake their phone and the SDK pops up, they are encouraged to additionally mark a
spot on the screenshot that seems odd to them.

## Excluding the screenshot from a report
Shake provides you with an option to exclude the automatic screenshot from reports.  

For example, you are manually invoking Shake through the code in the settings screen of your app, but this 
screen is not associated with the feedback in any way, nor will it show the screenshot of the issue.

Once Shake is invoked, users can always manually attach a screenshot that better describes the feedback context.

You can exclude an automatic screenshot from reports using the following snippet:

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
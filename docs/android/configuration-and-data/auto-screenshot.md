---
id: auto-screenshot
title: Auto screenshot
---
import useBaseUrl from '@docusaurus/useBaseUrl';

> When Shake's New ticket screen is invoked, a screenshot is automatically attached to it.

<table class="media-container media-container-highlighted mt-50 mb-40">
<img
  alt="Auto screenshot"
  width="380"
  src={useBaseUrl('img/phone-auto-screenshot@2x.png')}
/>
</table>

:::note

Jetpack Compose is a declarative UI toolkit, a paradigm shift from the current View system.
On devices with OS older than Android O, Shake will capture Jetpack Compose screens but not the LazyColumn, LazyRow, Scaffold and Shapes components.
On devices with Android O and newer, Shake will capture those components too, if they are not in a dialog.

:::

## Disable

Imagine a case where you leave the auto screenshot enabled and you set up Shake in a way that your users report all their issues and suggestions
only by visiting **My account → Help** in your app. Since Shake would always be invoked from that same place, every ticket your users send you
would always have the identical screenshot attached. That would be both confusing and useless.

<table class="media-container mt-40 mb-40">
<img
  alt="Open Shake Home screen"
  width="520"
  src={useBaseUrl('screens/open-shake-home-screen@2x.png')}
/>
</table>

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

## Privacy
Visit [Protect sensitive data](/android/configuration-and-data/manage-sensitive-data/#views) to learn
how to easily mark any view as private so it's automatically deleted from the auto screenshot.
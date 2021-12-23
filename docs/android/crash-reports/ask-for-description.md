---
id: ask-for-description
title: Ask for description
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

>On the first app launch after the crash, you decide whether you want Shake to ask your user to describe the crash.


## Introduction

This option is disabled by default. If you keep it this way, the crash report will be sent to you instantly and silently.


## Enable

If you enable it, a sheet will be shown to your user, givinig them an opportunity to describe what they were doing before the crash, potentially helping you a lot with their comment.

<table class="media-container media-container-highlighted mt-40 mb-40 pb-80">
<img
  alt="Ask for description sheet"
  width="386"
  src={useBaseUrl('img/ask-for-description@2x.png')}
/>
</table>

To enable it:
1. Set the `isAskForCrashDescription` flag to `true`.
1. Then, call the `Shake.start` method.

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="MainActivity.java"
// highlight-next-line
Shake.setAskForCrashDescription(true);
```

</TabItem><TabItem value="kotlin">

```kotlin title="MainActivity.kt"
// highlight-next-line
Shake.setAskForCrashDescription(true)
```

</TabItem></Tabs>

If the user decides they don't want to add their description (they tap outside the sheet) → the crash report will be sent to you silently anyway.

If the user decides they do want to add their description (they tap the confirmation button) but then discards their ticket on the New ticket screeen → the crash report will be discarded.
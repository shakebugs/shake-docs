---
id: followup-email
title: Follow-up email
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This page covers the follow-up email field of the SDK *Wrap-up* screen. 

## Introduction
You can chose to pre-fill the follow-up email field or to hide the field entirely using these methods: 

## Hide the *Follow-up email* field
If you don’t want the field to show when submitting a bug report, you can hide it using the following method:

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
Shake.getReportConfiguration().setEnableEmailField(false);
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.getReportConfiguration().isEnableEmailField = false
```

</TabItem>
</Tabs>

## Pre-fill the *Follow-up email* field
If you want to pre-fill the field when submitting a bug report, you can do it using the following method:

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
Shake.getReportConfiguration().setEmailField("your@email.com");
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.getReportConfiguration().email = "your@email.com"
```

</TabItem>
</Tabs>
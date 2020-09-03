---
id: feedback_type
title: Feedback type
---
This page describes the feedback type feature.

## Multiple feedback types
By default, Shake allows user to choose feedback type for their report.
The supported feedback types are *bug*, *suggestion* and *question*.

First time Shake is shown, feedback type *bug* is selected by default.
User can choose another feedback type and Shake will remember it for the next report.

Reported feedbacks will automatically be tagged with corresponding feedback type tag.

## Disabling
If you want, you can disable feedback type picker:

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
// highlight-start
Shake.getReportConfiguration().setEnableMultipleFeedbackTypes(false);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.getReportConfiguration().isEnableMultipleFeedbackTypes = false
// highlight-end
```

</TabItem>
</Tabs>

In that case, reports won't have assigned feedback type.

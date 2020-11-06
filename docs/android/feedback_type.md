---
id: feedback_type
title: Feedback type
---
This SDK option allows your users to categorize their feedback.

## Introduction
When submitting their feedback, your users immediately categorize it as either a bug report, an improvement suggestion, or just a question.

Depending on their choice, you automatically receive the <span class="tag-button pink-tag-button">bug</span>, <span class="tag-button pink-tag-button">suggestion</span> or <span class="tag-button pink-tag-button">question</span> tag next to their ticket in your [Shake Dashboard](https://app.shakebugs.com). This way, you can filter and browse them efficiently!

## Disabling
If you don’t want your users to have to categorize their feedback, simply hide this option using the following method:

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

On your Shake Dashbaord, all these tickets won't have any specific type (and tag).

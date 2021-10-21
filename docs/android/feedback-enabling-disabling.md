---
id: feedback-enabling-disabling
title: Enabling/disabling
---

## Disabling
If you don’t want your users to have to categorize their feedback, simply hide this option using the following method:

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
Shake.getReportConfiguration().setFeedbackTypeEnabled(false);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.getReportConfiguration().isFeedbackTypeEnabled = false
// highlight-end
```

</TabItem>
</Tabs>

On your Shake Dashboard, all these tickets won't have any specific type (and tag).
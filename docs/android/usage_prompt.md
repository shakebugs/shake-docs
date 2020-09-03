---
id: usage_prompt
title: Usage prompt
---
This page describes how to show Shake introduction dialog.

## Introduction
Shake provides you a way to inform your users how to use Shake in your application.  
If enabled, dialog with introduction message will be shown first time user enters the app.  
Shake will remember when dialog was displayed and won't show it anymore.

## How to use
By default, this feature is disabled, but if you want, you can enable it using the following method:

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
Shake.setShowUsagePrompt(true);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.setShowUsagePrompt(true)
// highlight-end
```

</TabItem>
</Tabs>

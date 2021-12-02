---
id: intro-message
title: Intro message
---
There's a simple way to inform all your app users (or testers) how to send feedback.

## How to use
If enabled, a one-off intro message will be shown to a user as soon as they open up your app for the first time. This message is disabled by default, but you can easily enable it using the following method:

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
Shake.setShowIntroMessage(true);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.setShowIntroMessage(true)
// highlight-end
```

</TabItem>
</Tabs>

---
id: intro-message
title: Intro message
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>There's a simple way to inform all your app users or testers how to send you feedback.

<table class="media-container media-container-highlighted mt-50 pb-80">
<img
  alt="User feedback intro message"
  width="380"
  src={useBaseUrl('screens/android-macro-intro-message@2x.png')}
/>
</table>


## How to use
If enabled, a one-off intro message will be shown to every user as soon as they open up your app for the first time.
Its text is automatically set based on the [manual invocations you use](/android/customer-feedback/invoke.md#invoke-manually) so you don't need to write anything.
This message is disabled by default, enable it easily using the following method:

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


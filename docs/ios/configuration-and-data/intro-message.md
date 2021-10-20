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
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-start
SHKShake.configuration.setShowIntroMessage = YES;
// highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-start
Shake.configuration.setShowIntroMessage = true
// highlight-end
```

</TabItem>
</Tabs>

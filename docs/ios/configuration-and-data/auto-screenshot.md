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

## Disable

Let's suppose you are invoking Shake through code from the **My account → Help** screen of your app. You would always receive the same 
screenshot and it wouldn't be related to all sorts of reported tickets in any way.

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
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```java title="App.m"
// highlight-next-line
//highlight-next-line 
SHKShake.configuration.isScreenshotIncluded = false;
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
//highlight-next-line
Shake.configuration.isScreenshotIncluded = false
```

</TabItem>
</Tabs>

## Privacy
Visit [Protect sensitive data](/ios/configuration-and-data/manage-sensitive-data/#views) to learn
how to easily mark any view as private so it's automatically deleted from the auto screenshot.

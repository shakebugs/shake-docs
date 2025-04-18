---
id: intro-message
title: Intro message
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>There's a simple way to let all your app users or testers know how to send you feedback.

<p class="p2 mt-40">You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/user-feedback/intro-message/">iOS</a>&nbsp; 
<a href="/docs/android/user-feedback/intro-message/">Android</a>&nbsp;
<a href="/docs/flutter/user-feedback/intro-message/">Flutter</a>&nbsp;  
</p>


<table class="media-container media-container-highlighted mt-50 pb-80">
<img
  alt="User feedback intro message"
  width="380"
  src={useBaseUrl('screens/android-macro-intro-message@2x.png')}
/>
</table>

If enabled, a one-off intro message will be shown to your users as soon as they open your app for the first time.
Its text is automatically set based on the [manual invocations you use](/react/user-feedback/invoke.md#invoke-manually), so you don't need to write anything.
This message is disabled by default. Enable it easily using the following method:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
Shake.setShowIntroMessage(true);
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.setShowIntroMessage(true);
```

</TabItem>
</Tabs>

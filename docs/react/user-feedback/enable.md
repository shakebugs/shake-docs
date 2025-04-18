---
id: enable
title: Enable
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>The User feedback module is enabled by default.

<p class="p2 mt-40">You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/user-feedback/enable/">iOS</a>&nbsp; 
<a href="/docs/android/user-feedback/enable/">Android</a>&nbsp;
<a href="/docs/flutter/user-feedback/enable/">Flutter</a>&nbsp;  
</p>


This is how you disable it:
1. First, set the `setUserFeedbackEnabled` flag to `false`.
1. Then, call the `Shake.start` method.

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
Shake.setUserFeedbackEnabled(false);
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.setUserFeedbackEnabled(false);
```

</TabItem>
</Tabs>

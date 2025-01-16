---
id: silent-user-feedback
title: Silent user feedback
---
>Send yourself feedback from the app background, without showing [Shake UI](web/shake-ui.md).

<p class="p2 mt-40">You're viewing the Web docs. Other platforms → &nbsp;
<a href="/docs/ios/user-feedback/silent-user-feedback/">iOS</a>&nbsp; 
<a href="/docs/android/user-feedback/silent-user-feedback/">Android</a>&nbsp;
<a href="/docs/react/user-feedback/silent-user-feedback/">React Native</a>&nbsp;
<a href="/docs/flutter/user-feedback/silent-user-feedback/">Flutter</a>&nbsp;  
</p>


## Overview
You can send silent user feedback to yourself by calling the `Shake.silentReport` method anywhere after `Shake.start`. Feel free to add your own description to it as well.

*SilentReportConfig* determines the behavior and data attached to the silent user feedback:
* [Auto screenshot](/docs/web/configuration-and-data/screen-capture.md) if the feature is turned on

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

<Tabs
groupId="web"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
const sendSilentReport = () => {
  // highlight-next-line
  Shake.silentReport("Description #tag1 #tag2");
}
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
const sendSilentReport = () => {
  // highlight-next-line
  Shake.silentReport("Description #tag1 #tag2");
}
```

</TabItem>
</Tabs>

## Show the Ticket submitted message

To optionally notify your user that a silent user feedback has just been submitted,
change the `SilentReportConfig` and use that configuration object when
sending the silent user feedback with the `Shake.silentReport` method:

<Tabs
groupId="web"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
const sendSilentReport = () => {
  // highlight-start
  const config = {
    takeScreenshot: true,
    showSuccessMessage: true,
    includeSessionReplay: true
  }

  Shake.silentReport("Description #tag1 #tag2", config);
  // highlight-end
}
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
const sendSilentReport = () => {
  // highlight-start
  const config: SilentReportConfig  = {
    takeScreenshot: true,
    showSuccessMessage: true,
    includeSessionReplay: true
  }

  Shake.silentReport("Description #tag1 #tag2", config);
  // highlight-end
}
```

</TabItem>
</Tabs>

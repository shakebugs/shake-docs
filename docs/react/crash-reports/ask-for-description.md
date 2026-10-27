---
id: ask-for-description
title: Ask for a description
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>You decide whether or not you want Shake to ask your user to describe the crash.

<p class="p2 mt-40">
You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/crash-reports/ask-for-description">iOS</a>&nbsp;
<a href="/docs/android/crash-reports/ask-for-description">Android</a>&nbsp;
<a href="/docs/flutter/crash-reports/ask-for-description">Flutter</a>&nbsp;
</p>


## Introduction

This option is disabled by default. If you keep it this way, the crash report will be sent to you instantly and silently.

## Enable

If you enable it, a sheet will be shown to your user, giving them an opportunity to describe what they were doing before the crash,
potentially providing you with additional helpful information.

<table class="media-container media-container-highlighted mt-40 mb-40 pb-80">
<img
  alt="Ask for description sheet"
  width="386"
  src={useBaseUrl('img/ask-for-description@2x.png')}
/>
</table>

To enable it:
1. First, set the `setAskForCrashDescription` flag to `true`.
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
Shake.setAskForCrashDescription(true);
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.setAskForCrashDescription(true);
```

</TabItem>
</Tabs>

## When the sheet is shown

If your app keeps running after the crash, the sheet is shown right away.
If the crash closes your app, the sheet is shown on the first app launch after the crash.

Errors you report with `Shake.handleError` never show the sheet.

## What happens next

If the user decides they don't want to add their own description (they tap outside the sheet) → the crash report will be sent to you silently anyway.

If the user decides they do want to add their own description (they tap the confirmation button) but then discards their ticket on the New ticket screen → the crash report will be discarded.

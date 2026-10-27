---
id: enable
title: Enable
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Turn the Crashes module on or off with a single flag.

<p class="p2 mt-40">
You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/crash-reports/enable">iOS</a>&nbsp;
<a href="/docs/android/crash-reports/enable">Android</a>&nbsp;
<a href="/docs/flutter/crash-reports/enable">Flutter</a>&nbsp;
</p>

This is how you enable it:
1. First, set the `setCrashReportingEnabled` flag to `true`.
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
Shake.setCrashReportingEnabled(true);
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.setCrashReportingEnabled(true);
```

</TabItem>
</Tabs>

To disable crash reporting, set the flag to `false` in the same way.

:::note

Shake keeps working with the error handler your app already has. It calls the global error handler you set
with `ErrorUtils.setGlobalHandler` after it has reported the error.

Set your own handler **before** calling `Shake.start`. A handler you set after `Shake.start` replaces Shake's,
and Shake no longer sees those errors.

:::

After you have enabled crash reporting, set up [symbolication](/react/crash-reports/symbolicate)
and then [test crash reporting](/react/crash-reports/test-it-out) in your app.

---
id: enable
title: Enable
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>The Crash reports module is enabled by default.

<p class="p2 mt-40">
You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/crash-reports/enable">iOS</a>&nbsp;
<a href="/docs/android/crash-reports/enable">Android</a>&nbsp;
<a href="/docs/flutter/crash-reports/enable">Flutter</a>&nbsp;
</p>

If you'd like to turn it off, set the `setCrashReportingEnabled` flag to `false` before calling the `Shake.start` method.

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
Shake.setCrashReportingEnabled(false);
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.setCrashReportingEnabled(false);
```

</TabItem>
</Tabs>

:::note

Shake keeps working with the error handler your app already has. It calls the global error handler you set
with `ErrorUtils.setGlobalHandler` after it has reported the error.

Set your own handler **before** calling `Shake.start`. A handler you set after `Shake.start` replaces Shake's,
and Shake no longer sees those errors.

:::

Set up [symbolication](/react/crash-reports/symbolicate)
and then [test crash reporting](/react/crash-reports/test-it-out) in your app.

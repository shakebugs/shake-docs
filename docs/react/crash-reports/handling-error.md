---
id: handling-error
title: Handling error
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Make great use of error handling and document these errors.

<p class="p2 mt-40">
You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/crash-reports/handling-error">iOS</a>&nbsp;
<a href="/docs/android/crash-reports/handling-error">Android</a>&nbsp;
<a href="/docs/flutter/crash-reports/handling-error">Flutter</a>&nbsp;
</p>

## Introduction

Shake allows you to report those caught errors and group them together.
These non-fatal error reports will have all of the same
contextual information as crash reports and will act as an extension to the crash reporting feature.

Non-fatal errors are sent to you silently. Shake never asks your user to describe them.

:::note

Avoid using unique values for error *clusterId*  as that would cause a large number of reported errors to stay
unrelated and ungrouped, which would clog your Shake dashboard.

:::

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
try {
  throw new Error('Handled test error');
} catch (error) {
  // highlight-next-line
  Shake.handleError(error, 'cluster-id');
}
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
try {
  throw new Error('Handled test error');
} catch (error) {
  // highlight-next-line
  Shake.handleError(error, 'cluster-id');
}
```

</TabItem>
</Tabs>

The `clusterId` argument is optional. You can report anything you catch, Shake accepts the value even if it isn't an `Error`.

## Promise rejections

Shake doesn't report unhandled promise rejections automatically. To report one, handle it and pass it to Shake:

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
fetchData().catch((error) => {
  // highlight-next-line
  Shake.handleError(error, 'fetch-data');
});
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
fetchData().catch((error: unknown) => {
  // highlight-next-line
  Shake.handleError(error, 'fetch-data');
});
```

</TabItem>
</Tabs>

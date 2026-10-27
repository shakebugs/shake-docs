---
id: test-it-out
title: Test it
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Let's crash your app to see what the crash report looks like on your Shake dashboard.

<p class="p2 mt-40">
You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/crash-reports/test-it-out">iOS</a>&nbsp;
<a href="/docs/android/crash-reports/test-it-out">Android</a>&nbsp;
<a href="/docs/flutter/crash-reports/test-it-out">Flutter</a>&nbsp;
</p>


## Crash your app

[Enable crash reporting](/react/crash-reports/enable.md) and add this button to one of your screens.
It will throw an error when you tap it:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="App.js"
// highlight-start
<Button
  title="Crash me"
  onPress={() => {
    throw new Error('Test crash');
  }}
/>
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="App.tsx"
// highlight-start
<Button
  title="Crash me"
  onPress={() => {
    throw new Error('Test crash');
  }}
/>
// highlight-end
```

</TabItem>
</Tabs>

Tap the button:
* In a **release** build, your app closes. Reopen your app, describe the crash and tap *Submit*.
* In a **development** build, your app shows the error screen and keeps running. Shake reports the error right away.

Test with a release build to see exactly what your users will see.

:::note

To test a crash in the native code of your app, see the [iOS](/ios/crash-reports/test-it-out)
and [Android](/android/crash-reports/test-it-out) instructions.

:::

## Visit your Shake dashboard

To see your crash report:
1. Visit your [Shake dashboard](https://app.shakebugs.com)
1. Switch to the **Crashes** tab in the left sidebar

If your crash report is not visible instantly, wait a minute until the system processes it.

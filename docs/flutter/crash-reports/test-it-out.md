---
id: test-it-out
title: Test it
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>Let's crash your app to see what the crash report looks like on your Shake dashboard.

<p class="p2 mt-40">
You're viewing the Flutter docs. Other platforms → &nbsp;
<a href="/docs/ios/crash-reports/test-it-out">iOS</a>&nbsp;
<a href="/docs/android/crash-reports/test-it-out">Android</a>&nbsp;
<a href="/docs/react/crash-reports/test-it-out">React Native</a>&nbsp;
</p>


## Crash your app

[Enable crash reporting](/flutter/crash-reports/enable.md) and add this button to one of your screens.
It will throw an error when you tap it:

```dart title="main.dart"
// highlight-start
ElevatedButton(
  onPressed: () {
    throw StateError('Test crash');
  },
  child: Text('Crash me'),
)
// highlight-end
```

Tap the button. Your app keeps running, and Shake reports the error right away. If you have enabled
[asking for a description](/flutter/crash-reports/ask-for-description), describe the crash and tap *Submit*.

:::note

To test a crash in the native code of your app, see the [iOS](/ios/crash-reports/test-it-out)
and [Android](/android/crash-reports/test-it-out) instructions.

:::

## Visit your Shake dashboard

To see your crash report:
1. Visit your [Shake dashboard](https://app.shakebugs.com)
1. Switch to the **Crashes** tab in the left sidebar

If your crash report is not visible instantly, wait a minute until the system processes it.

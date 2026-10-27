---
id: enable
title: Enable
---

>Turn the Crashes module on or off with a single flag.

<p class="p2 mt-40">
You're viewing the Flutter docs. Other platforms → &nbsp;
<a href="/docs/ios/crash-reports/enable">iOS</a>&nbsp;
<a href="/docs/android/crash-reports/enable">Android</a>&nbsp;
<a href="/docs/react/crash-reports/enable">React Native</a>&nbsp;
</p>

This is how you enable it:
1. First, set the `setCrashReportingEnabled` flag to `true`.
1. Then, call the `Shake.start` method.

```dart title="main.dart"
// highlight-next-line
Shake.setCrashReportingEnabled(true);
```

To disable crash reporting, set the flag to `false` in the same way.

:::note

Shake keeps working with the error handlers your app already has. It calls your `FlutterError.onError` and
`PlatformDispatcher.instance.onError` handlers after it has reported the error.

Set your own handlers **before** calling `Shake.start`. A handler you set after `Shake.start` replaces Shake's,
and Shake no longer sees those errors.

:::

After you have enabled crash reporting, set up [symbolication](/flutter/crash-reports/symbolicate)
and then [test crash reporting](/flutter/crash-reports/test-it-out) in your app.

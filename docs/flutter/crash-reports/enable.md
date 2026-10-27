---
id: enable
title: Enable
---

>The Crash reports module is enabled by default.

<p class="p2 mt-40">
You're viewing the Flutter docs. Other platforms → &nbsp;
<a href="/docs/ios/crash-reports/enable">iOS</a>&nbsp;
<a href="/docs/android/crash-reports/enable">Android</a>&nbsp;
<a href="/docs/react/crash-reports/enable">React Native</a>&nbsp;
</p>

If you'd like to turn it off, set the `setCrashReportingEnabled` flag to `false` before calling the `Shake.start` method.

```dart title="main.dart"
// highlight-next-line
Shake.setCrashReportingEnabled(false);
```

:::note

Shake keeps working with the error handlers your app already has. It calls your `FlutterError.onError` and
`PlatformDispatcher.instance.onError` handlers after it has reported the error.

Set your own handlers **before** calling `Shake.start`. A handler you set after `Shake.start` replaces Shake's,
and Shake no longer sees those errors.

:::

Set up [symbolication](/flutter/crash-reports/symbolicate)
and then [test crash reporting](/flutter/crash-reports/test-it-out) in your app.

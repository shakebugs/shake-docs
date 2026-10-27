---
id: handling-error
title: Handling error
---

>Make great use of error handling and document these errors.

<p class="p2 mt-40">
You're viewing the Flutter docs. Other platforms → &nbsp;
<a href="/docs/ios/crash-reports/handling-error">iOS</a>&nbsp;
<a href="/docs/android/crash-reports/handling-error">Android</a>&nbsp;
<a href="/docs/react/crash-reports/handling-error">React Native</a>&nbsp;
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

```dart title="main.dart"
try {
  throw Exception('Handled test exception');
} catch (error, stackTrace) {
  // highlight-next-line
  Shake.handleError(error, stackTrace, clusterId: 'cluster-id');
}
```

## Errors in isolates

Shake reports errors of your main isolate automatically. An error in an isolate you start yourself ends that isolate,
and your app never hears about it unless you listen for it.

To report these errors, add a Shake error listener to the isolate. Start the isolate paused and resume it after
the listener is added, otherwise the isolate can fail before the listener exists:

```dart title="main.dart"
final isolate = await Isolate.spawn(worker, data, paused: true);

// highlight-next-line
Shake.addIsolateErrorListener(isolate);

isolate.resume(isolate.pauseCapability!);
```

By default, these errors are reported the same way as uncaught errors in your main isolate. Pass `fatal: false` to
report them as non-fatal errors instead, and use `clusterId` to group them:

```dart title="main.dart"
// highlight-next-line
Shake.addIsolateErrorListener(isolate, fatal: false, clusterId: 'cluster-id');
```

An isolate only sends its errors as text, so the error type on the dashboard is taken from that text.
When it can't be recognized, the type is shown as `IsolateError`.

`Shake.addIsolateErrorListener` returns the port that receives the errors. To stop reporting them,
pass that port to `Shake.removeIsolateErrorListener`:

```dart title="main.dart"
final port = Shake.addIsolateErrorListener(isolate);

// highlight-next-line
Shake.removeIsolateErrorListener(isolate, port);
```

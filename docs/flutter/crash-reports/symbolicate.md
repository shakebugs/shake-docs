---
id: symbolicate
title: Symbolicate
---

> Crash reports are a lot more useful when you see readable stack traces.

<p class="p2 mt-40">
You're viewing the Flutter docs. Other platforms → &nbsp;
<a href="/docs/ios/crash-reports/symbolicate">iOS</a>&nbsp;
<a href="/docs/android/crash-reports/deobfuscation">Android</a>&nbsp;
<a href="/docs/react/crash-reports/symbolicate">React Native</a>&nbsp;
</p>

## Dart code

Stack traces of your Dart code are readable out of the box, and you don't have to upload anything.

If you build your release app with `--split-debug-info` or `--obfuscate`, Flutter removes the names from your app.
Symbolication of these Dart stack traces isn't available yet.

## Native code

Crashes in the Android and iOS parts of your Flutter app are processed like crashes of any native app:

* Android: [upload your mapping files](/android/crash-reports/deobfuscation).
* iOS: [upload your dSYM files](/ios/crash-reports/symbolicate).

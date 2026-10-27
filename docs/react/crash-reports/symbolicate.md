---
id: symbolicate
title: Symbolicate
---

> Crash reports are a lot more useful when you see readable stack traces.

<p class="p2 mt-40">
You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/crash-reports/symbolicate">iOS</a>&nbsp;
<a href="/docs/android/crash-reports/deobfuscation">Android</a>&nbsp;
<a href="/docs/flutter/crash-reports/symbolicate">Flutter</a>&nbsp;
</p>

## JavaScript code

React Native packs your JavaScript into a single bundle, so the stack traces of your JavaScript errors point to
positions inside that bundle. Symbolication of these stack traces isn't available yet.

## Native code

Crashes in the Android and iOS parts of your React Native app are processed like crashes of any native app:

* Android: [upload your mapping files](/android/crash-reports/deobfuscation).
* iOS: [upload your dSYM files](/ios/crash-reports/symbolicate).

---
id: enable
title: Enable
---

>The User feedback module is enabled by default.

<p class="p2 mt-40">You're viewing the Flutter docs. Other platforms → &nbsp;
<a href="/docs/ios/user-feedback/enable/">iOS</a>&nbsp;
<a href="/docs/android/user-feedback/enable/">Android</a>&nbsp;  
<a href="/docs/react/user-feedback/enable/">React Native</a>&nbsp; 
</p>

This is how you disable it:
1. First, set the `setUserFeedbackEnabled` flag to `false`.
1. Then, call the `Shake.start` method.

```dart title="main.dart"
// highlight-next-line
Shake.setUserFeedbackEnabled(false);
```

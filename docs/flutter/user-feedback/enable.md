---
id: enable
title: Enable
---

>The User feedback module is enabled by default.

This is how you disable it:
1. First, set the `setUserFeedbackEnabled` flag to `false`.
1. Then, call the `Shake.start` method.

```dart title="main.dart"
// highlight-next-line
Shake.setUserFeedbackEnabled(false);
```

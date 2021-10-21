---
id: customer-feedback-enabling-disabling
title: Enabling/disabling
---

## Disabling
If you don’t want your users to have to categorize their feedback, simply hide this option using the following method:

```dart title="main.dart"
// highlight-next-line
Shake.setEnableMultipleFeedbackTypes(false);
```

On your Shake Dashboard, all these tickets won't have any specific type (and tag).
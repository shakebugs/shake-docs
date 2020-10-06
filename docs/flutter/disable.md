---
id: disable
title: Disable
---
This page is about preventing a segment of your users from using Shake.

## Introduction
Let's start with two use cases.

Maybe some of your users have opted in for beta access, others haven't.
Or, maybe you're building a new Airbnb and want *hosts* to be able to report bugs back to you, but don't want to show Shake to the *guests*.

## How to use
Call the `Shake.setEnabled(false)` method wherever you find it appropriate in your app. Shake will be disabled immediately, which means:

1. Shake can't be invoked any more
1. Shake stops tracking all data

So let's suppose you want to allow Shake to your *hosts*, but not to *guests*. You would do this:

```dart title="lib/main.dart"
// highlight-next-line
import 'package:shake_flutter/shake_flutter.dart';

_loggedInSuccessfully(user) {
  if (user.type == "GUEST") {
    // highlight-next-line
    Shake.setEnabled(false);
  }
}
```

## Enable Shake again
If, for some reason, you want to enable Shake again, you can do it easily by calling `Shake.setEnabled(true)`.

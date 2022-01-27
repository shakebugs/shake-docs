---
id: disable
title: Disable
---

>After you start Shake, you can pause and resume it for any of your users at any point.

## Example

Let's suppose some of your users have opted in for beta access while others haven't.
Or, maybe you're building a new Airbnb app and want *hosts* to be able to send you tickets
but don't want *guests* to have Shake features.

You could never call the `Shake.start()` method for guests, but what if a user switches from host to guest mode?

## Disable
Call the `Shake.setEnabled(false)` method wherever you want to in your app. Shake will be disabled immediately, which means:

* Shake can't be invoked any more.
* Shake stops tracking all data.

Back to our example where you want to allow *hosts* to use Shake but not the *guests*. You would do this:

```dart title="main.dart"
// highlight-next-line
import 'package:shake_flutter/shake_flutter.dart';

void loggedInSuccessfully(User user) {
    if (user.type == 'GUEST') {
        // highlight-next-line
        Shake.setEnabled(false);
    }
}
```

## Enable Shake again
If, for some reason, you want to enable Shake again, you can do it easily by calling `Shake.setEnabled(true)`.

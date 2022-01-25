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
Set `Shake.isPaused` property to true wherever you find it appropriate in your app. Shake will be paused immediately, which means:

* Shake can't be invoked any more.
* Shake stops tracking all data.

Back to our example where you want to allow *hosts* to use Shake but not the *guests*. You would do this:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
- (void)didLogInWithUser:(User *)user success:(BOOL)success {
    if (user.isHost) {
        NSLog(@"User logged in as host. Resuming Shake.");
        //highlight-next-line
        SHKShake.isPaused = NO;
    } else {
        NSLog(@"User logged in as guest. Pausing Shake.");
        //highlight-next-line
        SHKShake.isPaused = YES;
    }
}
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
func didLogIn(user: User, success: Bool) {
    if user.isHost {
        print("User logged in as host. Resuming Shake.")
        //highlight-next-line
        Shake.isPaused = false
    } else {
        print("User logged in as guest. Pausing Shake.")
        //highlight-next-line
        Shake.isPaused = true
    }
}
```

</TabItem>
</Tabs>

## Enable
If for some reason you want to enable Shake again, you can easily do so by calling `Shake.isPaused = false`.

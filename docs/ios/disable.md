---
id: disable
title: Pause
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page is about preventing a segment of your users from using Shake.

## Introduction
Let's start with two use cases.

Maybe some of your users have opted in for beta access, others haven't.
Or, maybe you're building a new Airbnb and want *hosts* to be able to report bugs back to you, but don't want to show Shake to the *guests*.

You could simply never call the  `Shake.start()` method for guest users, but what if a user switches from host to guest mode?

## Pausing
Set `Shake.isPaused` property to `true` wherever you find it appropriate in your app.

Shake will be paused immediately, which means:
1. Shake can't be invoked any more
1. Shake stops tracking all data

So let's suppose a user switches from one mode to another. You would do this:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec
- (void)didLogInWithUser:(User *)user success:(BOOL)success {
    if (user.isHost) {
        NSLog(@"User logged in as host. Resuming Shake.");
        SHKShake.isPaused = NO;
    } else {
        NSLog(@"User logged in as guest. Pausing Shake.");
        SHKShake.isPaused = YES;
    }
}
```

</TabItem>

<TabItem value="swift">

```swift
func didLogIn(user: User, success: Bool) {
    if user.isHost {
        print("User logged in as host. Resuming Shake.")
        Shake.isPaused = false
    } else {
        print("User logged in as guest. Pausing Shake.")
        Shake.isPaused = true
    }
}
```

</TabItem>
</Tabs>


## Resuming
When you want to resume Shake again, you can do it easily by setting `Shake.isPaused` back to  `false` .

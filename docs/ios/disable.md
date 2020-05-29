---
id: disable
title: Disable
---
This page is about enabling and disabling your users from using Shake.

For example, maybe you're building a new Airbnb and want hosts to be able to report bugs back to you, 
but don't want to show Shake to the guests. You can user enable and disable methods to accomplish that requirement.

## Enable
Call the `Shake.start()` if you want to enable Shake in your application.

Shake will be enabled immediately, which means:
1. Shake can be invoked
1. Shake starts tracking all data

So let's suppose you want to allow Shake to your users, but not to guests. You would do this: 

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

```objectivec {3} title="AppDelegate.m"
(void) loggedInSuccessfullyWithUser: (User *) user {
  if (user.kind != UserKindGuest) {
    [SHKShake stop];
  }
}
```

</TabItem>

<TabItem value="swift">

```swift {3} title="AppDelegate.swift"
override fun loggedInSuccessfully(user: User) {
  if user.kind != .guest  {
    Shake.start();
  }
}
```

</TabItem>
</Tabs>

## Disable
Call the `Shake.stop()` if you want to disable Shake in your application.
 
Shake will be disabled immediately, which means:
1. Shake can't be invoked any more
1. Shake stops tracking all data

So let's suppose you want to allow Shake to your users, but not to guests. You would do this: 

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec {3} title="AppDelegate.m"
(void) loggedInSuccessfullyWithUser: (User *) user {
  if (user.kind == UserKindGuest) {
    [SHKShake stop];
  }
}
```

</TabItem>

<TabItem value="swift">

```swift {3} title="AppDelegate.swift"
override fun loggedInSuccessfully(user: User) {
  if user.kind == .guest  {
    Shake.stop();
  }
}
```

</TabItem>
</Tabs>
              

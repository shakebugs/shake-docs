---
id: disable
title: Stopping
---
This page is about preventing a segment of your users from using Shake.

## Introduction
Let's start with two use cases.

Maybe some of your users have opted in for beta access, others haven't.
Or, maybe you're building a new Airbnb and want *hosts* to be able to report bugs back to you, but don't want to show Shake to the *guests*.

## How to use
Call the `Shake.stop()` method wherever you find it appropriate in your app. Shake will stop working immediately, which means:

Shake will stop working immediately, which means:
1. Shake can't be invoked any more
1. Shake stops tracking all data

So let's suppose you want to allow Shake to your *hosts*, but not to *guests*. You would do this:

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
(void) loggedInSuccessfullyWithUser: (User *) user {
  if (user.kind == UserKindGuest) {
    // highlight-next-line
    [SHKShake stop];
  }
}
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
override fun loggedInSuccessfully(user: User) {
  if user.kind == .guest  {
    // highlight-next-line
    Shake.stop();
  }
}
```

</TabItem>
</Tabs>


## Resuming Shake again
If, for some reason, you want to start Shake again, you can do it easily: Resume Shake by calling `Shake.start()` again.

---
id: disable
title: Disable
---

This page is about preventing a segment of your users from using Shake.

## Introduction
Let's start with two use cases.

Maybe some of your users have opted in for beta access, others haven't.
Or, maybe you're building a new Airbnb and want *hosts* to be able to report bugs back to you, but don't want to show Shake to the *guests*.

You could simply never call the  `Shake.start()` method for guest users, but what if a user switches from host to guest mode?

## How to use
Call the `Shake.setEnabled(false)` method wherever you find it appropriate in your app. Shake will be disabled immediately, which means:

1. Shake can't be invoked any more
1. Shake stops tracking all data

So let's suppose you want to allow *hosts* to use Shake, but not the *guests*. You would do this:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="App.java"
public void loggedInSuccessfully(User user) {
  if (user.getUserType() == GUEST) {
    // highlight-next-line    
    Shake.setEnabled(false);
  }
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
override fun loggedInSuccessfully(user: User) {
  if (user.getUserType() == GUEST) {
    // highlight-next-line
    Shake.setEnabled(false)
  }
}
```

</TabItem>
</Tabs>

## Enable Shake again
If, for some reason, you want to enable Shake again, you can do it easily by calling `Shake.setEnabled(true)`.

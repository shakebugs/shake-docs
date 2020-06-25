---
id: disable
title: Disable
---
This page is about preventing a segment of your users from using Shake.

## Introduction
Let's start with two use cases.

Maybe some of your users have opted in for beta access, others haven't.
Or, maybe you're building a new Airbnb and want *hosts* to be able to report bugs back to you, but don't want to show Shake to the *guests*.

## Disabling
Call the `Shake.setEnabled(false)` if you want to disable Shake in your application.

Shake will be disabled immediately, which means:
1. Shake can't be invoked any more
1. Shake stops tracking all data

So let's suppose you want to allow Shake to your *hosts*, but not to *guests*. You would do this:

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

## Enabling
Call the `Shake.setEnabled(true)` if you want to enable Shake in your application.

Shake will be enabled immediately, which means:
1. Shake can be invoked
1. Shake starts tracking all data

So let's suppose you want to allow Shake to your *hosts*, but not to *guests*. You would do this:

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
  if (user.getUserType() != GUEST) {
    // highlight-next-line
    Shake.setEnabled(true);
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

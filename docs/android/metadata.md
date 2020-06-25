---
id: metadata
title: Metadata
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This page explains how to send a value of any variable you wish from a user's app to your web Dashboard.

## Introduction
Every app is unique so the [Essentials](/android/essentials.md) sent with each bug report are often not enough.
That's why the Shake SDK allows you to send yourself any custom data from the app using Metadata.
It's a *String* pair which you can shape any way you want, and you can put anything you want into it.

You can find Metadata below [Blackbox](/android/blackbox.md) on the web Dashboard, as shown below:

<img
  alt="Metadata screen"
  src={useBaseUrl('screens/metadata_screen.png')}
/>


## How to use
To set the Metadata, call the `Shake.setMetadata()` method passing your desired data you want to
receive on your web Dashboard as a *String* pair.

You can call the `Shake.setMetadata()` method anywhere within your app, but be careful because any subsequent calls with the same *String* key will override the former *String* value.
Let’s say you wanted to send yourself a user’s ID after he successfully logs into your app using Metadata.
It would look something like this in code:

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
public void onLoginSuccessful(User user) {
    // highlight-next-line
    Shake.setMetadata("userid", user.id);
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
fun onLoginSuccessful(user: User) {
    // highlight-next-line
    Shake.setMetadata("userid", user.id)
}
```

</TabItem>
</Tabs>

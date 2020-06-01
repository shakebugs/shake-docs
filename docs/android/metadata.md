---
id: metadata
title: Metadata
---
This page explains how to send a value of any variable you wish from a user's app to your web Dashboard.

## Introduction
Every app is unique so the [Essentials](android/essentials.md) sent with each bug report are often not enough. 
That's why the Shake SDK allows you to send yourself any custom data from the app using Metadata. 
It's a String pair which you can shape any way you want, and you can put anything you want into it.

You can find Metadata below [Blackbox](android/blackbox.md) on the web Dashboard, as shown below:

![Metadata screen](/screens/metadata_screen.png)

## Usage
Call the `Shake.setMetadata()` method passing your desired data you want to 
receive on your web Dashboard as a String pair.

You can set metadata anywhere within your app, but be careful because any 
subsequent calls with the same key will override the former text value.

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

```java {2} title="App.java"
public void onLoginSuccessful(User user) {
  Shake.setMetadata("userid", user.id);
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin {2} title="App.kt"
fun onLoginSuccessful(user: User) {
  Shake.setMetadata("userid", user.id)
}
```

</TabItem>
</Tabs>

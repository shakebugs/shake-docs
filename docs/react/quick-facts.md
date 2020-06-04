---
id: quick-facts
title: Quick facts
---
This page explains how to send a value of any variable you wish from a user's app to your web Dashboard.

## Introduction
Every app is unique so the [Essentials](react/essentials.md) sent with each bug report are often not enough. 
That's why the Shake SDK allows you to send yourself any custom data from the app using Quick facts.
It's a text object which you can shape any way you want, and you can put anything you want into it.

This is where you will see Quick facts on your web Dashboard:

![Quick facts screen](/screens/quick_facts_screen.png)

## Usage
To set the Quick facts, call the `Shake.setQuickFacts()` method passing your Quick facts as a text 
containing data you want to receive on your web Dashboard.
 
You can set quick facts anywhere within your app, but be careful because any 
subsequent calls with the same key will override the former text value.

```javascript title="App.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

onLoginPress = async (username, password) => {
  const user = await login(username, password);
  if (user) {
    // highlight-next-line
    Shake.setQuickFacts("Logged user: " + user.id);
    navigateToHome();
  } else {
    console.log("Wrong credentials.");
  }
};
```

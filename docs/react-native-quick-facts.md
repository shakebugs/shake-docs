---
id: react-native-quick-facts
title: Quick facts
---
This page explains how to send a value of any variable you wish from a user's app to your web Dashboard.

## Introduction
Every app is unique so the [Essentials](react-native-essentials.md) sent with each bug report are often not enough. 
That's why the Shake SDK allows you to send yourself any custom data from the app using Quick facts.
It's a String object which you can shape any way you want, and you can put anything you want into it.

This is where you will see Quick facts on your web Dashboard:

![Quick facts](assets/quick_facts_screen.png)

## Set quick facts
To set the Quick facts, call the `Shake.setQuickFacts()` method passing your Quick facts as String 
containing data you want to receive on your web Dashboard. Be careful only to call it once, 
since any subsequent calls will override the former ones.

App.js
```javascript {1,6}
import Shake from '@shakebugs/react-native-shake';

onLoginPress = async (username, password) => {
  const user = await login(username, password);
  if (user) {
    Shake.setQuickFacts("Logged user: " + user.id);
    navigateToHome();
  } else {
    console.log("Wrong credentials.");
  }
};
```

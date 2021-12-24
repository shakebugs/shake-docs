---
id: metadata
title: Metadata
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This page explains how to send a value of any variable you wish from a user's app to your web Dashboard.

## Introduction

Every app is unique so the [Essentials](/flutter/configuration-and-data/essentials.md) sent with each bug report are often not enough.
That's why the Shake SDK allows you to send yourself any custom data from the app using Metadata.
It's a *String* pair which you can shape any way you want, and you can put anything you want into it.

You can find Metadata below [Blackbox](/flutter/configuration-and-data/blackbox.md) on the web Dashboard, as shown below:

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

```dart title="main.dart"
// highlight-next-line
import 'package:shake_flutter/shake_flutter.dart';

void onLoginSuccessful(User user) {
    // highlight-next-line
    Shake.setMetadata('userid', user.id);
}
```

## Clear metadata

If you want to clear existing metadata, you can use `Shake.clearMetadata` method.

For example, you want to clear metadata when the user logs out:

```dart title="main.dart"
// highlight-start
import 'package:shake_flutter/shake_flutter.dart';
import 'package:shake_flutter/enums/shake_screen.dart';
// highlight-end

void onLogOutPressed() {
    loginService.logout();
    
    // highlight-next-line
    Shake.clearMetadata();
}
```

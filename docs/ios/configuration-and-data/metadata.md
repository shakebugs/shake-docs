---
id: metadata
title: Metadata
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page explains how to send a value of any variable you wish from a user's app to your web Dashboard.

## Introduction

Every app is unique so the [Essentials](/ios/configuration-and-data/essentials.md) sent with each bug report are often not enough.
That's why the Shake SDK allows you to send yourself any custom data from the app using Metadata.
It's a *String* pair which you can shape any way you want, and you can put anything you want into it.

You can find Metadata below [Blackbox](/ios/configuration-and-data/blackbox.md) on the web Dashboard, as shown below:

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
- (void)onLoginSuccessful:(User *)user {
    // highlight-next-line
    [SHKShake setMetadataWithKey: @"userid" value: user.id];
}
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
func onLoginSuccessful(user: User) {
    // highlight-next-line
    Shake.setMetadata(key: "userid", value: user.id)
}
```

</TabItem>
</Tabs>

## Clear metadata

If you want to clear existing metadata, you can use `Shake.clearMetadata` method.

For example, you want to clear metadata when the user logs out:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="swift">

```swift title="UserService.swift"

func onLogOutPressed() {
    loginService.logout();

    // highlight-next-line
    Shake.clearMetadata();
}
```

</TabItem>

<TabItem value="objectivec">

```objectivec title="UserService.m"

- (void)onLogOutPressed() {
    
    [self.loginService logout];

    // highlight-next-line
    [SHKShake clearMetadata];
}
```

</TabItem>
</Tabs>


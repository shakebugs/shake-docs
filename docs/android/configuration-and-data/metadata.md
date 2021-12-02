---
id: metadata
title: Ticket metadata
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Attach a value of any variable from user's app to the tickets they report.

## Introduction
Every app is unique so the [Essentials](/android/configuration-and-data/essentials.md) sent with each ticket are often not enough.
That's why Shake also allows you to attach any custom data from the app to the ticket.

Every app is unique so the [Essentials](/android/configuration-and-data/essentials.md) sent with each bug report are often not enough.
That's why the Shake SDK allows you to send yourself any custom data from the app using Metadata.
It's a *String* pair which you can shape any way you want, and you can put anything you want into it.

You can find Ticket metadata in the right column of Shake dashboard.


## How to use

To set the Metadata, call the `Shake.setMetadata` method passing your desired data you want to
receive on your web Dashboard as a *String* pair.

You can call the `Shake.setMetadata` method anywhere within your app, but be careful because any subsequent calls with the same *String* key will override the former *String* value.
Let’s say you wanted to send yourself a user’s ID after he successfully logs into your app using Metadata.
It would look something like this in code:

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

## Different from User metadata

Use Ticket metadata to attach useful custom data to tickes. Examples are statuses of various app variables at the moment of ticket being sent:
* Current chat room ID
* List of items curreently in a shopping cart
* Task synced true/false
* Number of search results
* List sorted by what
* Video muted true/false

Use [User metadata](android/users/update-user-metadata.md) to attach custom data to users. Examples are:
* First and last name
* User ID
* Address
* Subscription status
* Date of birth
## Clear metadata

If you want to clear existing metadata, you can use `Shake.clearMetadata` method.

For example, you want to clear metadata when the user logs out:

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
public void onLogOutPressed() {
    loginService.logout();

    // highlight-next-line
    Shake.clearMetadata();
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
fun onLogOutPressed() {
    loginService.logout()

    // highlight-next-line
    Shake.clearMetadata()
}
```

</TabItem>
</Tabs>

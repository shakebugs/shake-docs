---
id: ticket-metadata
title: Ticket metadata
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Every app is unique so the [Data attached by default](/android/configuration-and-data/essentials) sent with each ticket are often not enough.
That's why Shake also allows you to automatically attach any custom data from your app to the ticket.

## How to use

To set Ticket metadata, call `Shake.setMetadata` and pass the data you want to
receive on Shake dashboard as a *String* pair.

You can call `Shake.setMetadata` anywhere in your app, but be careful because any subsequent calls with the same *String* key will override the former *String* value.
Let’s say you want to send yourself user’s ID after they successfully log into your app. You would do this:

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

Use Ticket metadata to attach useful custom data to tickets. Examples are statuses of various app variables at the moment of ticket being sent:
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

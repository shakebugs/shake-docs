---
id: ticket-metadata
title: Ticket metadata
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Every app is unique so the [Data attached by default](/android/configuration-and-data/data-attached-by-default) sent with each ticket are often not enough.
That's why Shake also allows you to automatically attach any custom data from your app to the ticket.

<p class="p2 mt-40">You're viewing the Android docs. Other platforms →&nbsp;
<a href="/docs/ios/configuration-and-data/ticket-metadata/">iOS</a>&nbsp;
<a href="/docs/react/configuration-and-data/ticket-metadata/">React Native</a>&nbsp;
<a href="/docs/flutter/configuration-and-data/ticket-metadata/">Flutter</a>&nbsp;
<a href="/docs/web/configuration-and-data/ticket-metadata/">Web</a>&nbsp;
</p>

## How to use

To set ticket metadata, call `Shake.setMetadata` and pass the data you want to
receive on your Shake dashboard as a *String* pair.

:::note

You can call `Shake.setMetadata` anywhere in your app, but be careful because any subsequent calls with the same *String* key will override the former *String* value.

:::

Let’s say you want to send yourself a roomID after a user successfully joins a chat room. You would do this:

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
public void onChatRoomJoined(Room room) {
    // highlight-next-line
    Shake.setMetadata("roomId", room.id);
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
fun onChatRoomJoined(room: Room) {
    // highlight-next-line
    Shake.setMetadata("roomId", room.id)
}
```

</TabItem>
</Tabs>

## Clear Ticket metadata

If you want to clear existing ticket metadata, you can use the `Shake.clearMetadata` method.

For example, you want to clear ticket metadata when the user leaves a chat room:

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
public void onChatRoomClosed() {
    chatService.close();

    // highlight-next-line
    Shake.clearMetadata();
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
fun onChatRoomClosed() {
    chatService.close()

    // highlight-next-line
    Shake.clearMetadata()
}
```

</TabItem>
</Tabs>

## Ticket metadata vs. User metadata

Use Ticket metadata to attach useful custom data to tickets. Examples are statuses of various app variables at the moment of ticket being sent:
* Current chat room ID
* List of items currently in a shopping cart
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

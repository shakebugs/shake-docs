---
id: ticket-metadata
title: Ticket metadata
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Every app is unique so the [Data attached by default](/flutter/configuration-and-data/data-attached-by-default) sent with each ticket are often not enough.
That's why Shake also allows you to automatically attach any custom data from your app to the ticket.

## How to use

To set ticket metadata, call `Shake.setMetadata` and pass the data you want to
receive on your Shake dashboard as a *String* pair.

:::note

You can call `Shake.setMetadata` anywhere in your app, but be careful because any subsequent calls with the same *String* key will override the former *String* value.

:::

Let’s say you want to send yourself a roomID after a user successfully joins a chat room. You would do this:

```dart title="main.dart"
// highlight-next-line
import 'package:shake_flutter/shake_flutter.dart';

void onChatRoomJoined(room: Room) {
    // highlight-next-line
    Shake.setMetadata('roomId', room.id);
}
```

## Clear Ticket metadata

If you want to clear existing ticket metadata, you can use the `Shake.clearMetadata` method.

For example, you want to clear ticket metadata when the user leaves a chat room:

```dart title="main.dart"
// highlight-start
import 'package:shake_flutter/shake_flutter.dart';
import 'package:shake_flutter/enums/shake_screen.dart';
// highlight-end

void onChatRoomClosed() {
    chatService.logout();
    
    // highlight-next-line
    Shake.clearMetadata();
}
```

## Ticket metadata vs. User metadata

Use Ticket metadata to attach useful custom data to tickets. Examples are statuses of various app variables at the moment of ticket being sent:
* Current chat room ID
* List of items currently in a shopping cart
* Task synced true/false
* Number of search results
* List sorted by what
* Video muted true/false

Use [User metadata](/flutter/users/update-user-metadata.md) to attach custom data to users. Examples are:
* First and last name
* User ID
* Address
* Subscription status
* Date of birth


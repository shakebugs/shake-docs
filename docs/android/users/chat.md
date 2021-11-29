---
id: chat
title: Chat
---

The user [can reply](android/screens/chat-screen.md) to your message sent over the Dashboard and provide you with more details 
about the reported bug, crash, or feedback - directly from the app without leaving it.
This allows you to fix bugs more easily and makes your customers happy, a win-win situation. 

## Enabling

Once your user is [registered](android/users/user-registration.md) with Shake, the real time chat feature is enabled automatically.

Each reported _Ticket_ represents a separate conversation, and can naturally be used to obtain valuable information directly from the end user. 

This feature is tightly integrated with, and follows the lifecycle of your _User_ registration, 
which means that calling `Shake.unregisterUser` also _disconnects_ the current user from chat, 
so he won't receive any new messages until registered again.

## Notifications

Shake will notify the end-user when a new message is sent over the Dashboard.


Notifications are automatically presented to the end-user, no additional code is required.

:::note

At the moment, Shake supports only _local_ notifications. Which means that end-users won't get notified about new messages when your application is in the _background_.

:::

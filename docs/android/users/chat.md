---
id: chat
title: Chat
---

>If needed, your users can [chat with you](/android/shake-ui/chat-screen) to provide you more details 
about their reported bugs, crashes or feedback. You will be able to fix issues faster and make your customers happier.

## Enable

Once your user is [registered](/android/users/register-user) with Shake, the chat feature is enabled automatically.
Each ticket they send you will be a separate conversation.

This feature is tightly integrated with and follows the lifecycle of your _User_ registration, 
which means that calling `Shake.unregisterUser` also _disconnects_ the current user from chat 
and they won't receive any new messages until registered again.

## Notifications

Shake will notify your user when you send them a new message from the Shake dashboard.
Notifications are presented automatically to the user. You don't have to code anything.

:::note

Shake supports only local notifications. That means that your users won't get notified about new messages
when your app is in the _background_.

:::
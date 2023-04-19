---
id: chat
title: Chat
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>If needed, your app users can [chat with you](/android/shake-ui/chat-screen) to provide you more details 
about their reported bugs, crashes or feedback. You will be able to fix issues faster and make your customers happier.

## Enable

Once your app user is [registered](/android/users/register-user) with Shake, the chat feature is enabled automatically.
Each ticket they send you will be a separate conversation.

This feature is tightly integrated with and follows the lifecycle of your _User_ registration, 
which means that calling `Shake.unregisterUser` also _disconnects_ the current app user from chat 
and they won't receive any new messages until registered again.

## Notifications

Shake will notify your app user when you send them a new message from the Shake dashboard.
Notifications are presented automatically to the app user. You don't have to code anything.

:::note

Shake supports only local notifications. That means that your app users won't get notified about new messages
when your app is in the _background_.

:::

## Unread messages

If you want to show number of unread chat messages somewhere in your app, you can set the unread messages listener.
The listener is called immediately when set and on each change in the number of unread messages for a registered app user:

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="MainActivity.java"
// highlight-start
Shake.setUnreadChatMessagesListener(new UnreadChatMessagesListener() {
    @Override
    public void onUnreadMessagesCountChanged(int count) {
        // Update number in your text element
    }
});
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="MainActivity.kt"
// highlight-start
Shake.setUnreadChatMessagesListener(object : UnreadChatMessagesListener {
    override fun onUnreadMessagesCountChanged(count: Int) {
        // Update number in your text element
    }
})
// highlight-end
```

</TabItem>
</Tabs>

To remove the unread messages listener, use `Shake.setUnreadChatMessagesListener(null)`.

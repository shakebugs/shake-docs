---
id: chat
title: Chat
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>If needed, your app users can [chat with you](/web/shake-ui#chat-screen) to provide you more details 
about their reported bugs, crashes or feedback. You will be able to fix issues faster and make your customers happier.

<p class="p2 mt-40">You're viewing the Web docs. Other platforms → &nbsp;
<a href="/docs/ios/users/chat/">iOS</a>&nbsp; 
<a href="/docs/android/users/chat/">Android</a>&nbsp;
<a href="/docs/react/users/chat/">React Native</a>&nbsp;
<a href="/docs/flutter/users/chat/">Flutter</a>&nbsp;  
</p>


## Enable

Once your app user is [registered](/web/users/register-user) with Shake, the chat feature is enabled automatically.
Each ticket they send you will be a separate conversation.

This feature is tightly integrated with and follows the lifecycle of your _User_ registration, 
which means that calling `Shake.unregisterUser` also _disconnects_ the current app user from chat 
and they won't receive any new messages until registered again.

## Notifications

Shake notifies your [app users](/web/users/register-user) about new messages sent from the Shake dashboard.
When a new message notification is received, Shake will automatically pop up on the screen and present chat 
where message was sent.

Additionally, if app user email is provided using [update user metadata](/web/users/update-user-metadata) method - 
app user will be automatically notified about new chat messages by email. Otherwise, if app user email is not specified
user has an option to leave contact email in Shake new ticket screen.

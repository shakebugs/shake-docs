---
id: chat-screen
title: Chat screen
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

*Chat screen* is a part of the app where users who report bugs, experience a crash 
or send you feedback can reply to your questions sent over the Dashboard.

## Introduction

Chat screen complements [Home screen](react/screens/home-screen.md) which is described on the previous page.

If you registered your *User* with Shake, all of their tickets will be listed on the *Home screen*.
Pressing the ticket item on the *Home screen* opens the *Chat screen*.

The user can reply to your message sent over the Dashboard and provide you with more details 
about the reported bug, crash, or feedback - directly from the app without leaving it.
This allows you to easier fix bugs and makes your customers happy, a win-win situation. 

Chat supports dark and light theme and is integrated with the white labeling to show it in your brand color.

<img
  className="screen-image"
  alt="Chat screen"
  src={useBaseUrl('screens/chat_screen.jpg')}
  width="296"
/>

## Show

*Chat screen* can be shown by pressing ticket item on the *Home screen*, 
or by pressing chat message notification in the notifications center.

Check [Chat](react/users/chat.md) page to learn how to enable real time chat in your app.

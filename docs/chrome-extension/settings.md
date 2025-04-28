---
id: settings
title: Settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Shake Chrome extension use cases explained and instructions on how to use it.

<br/>

There are a few ways you can utilize Shake extension:

## Create a ticket and share a link

With the Shake Chrome Extension, you can easily create a public ticket to share with others or keep for personal reference.

Simply select the option _Just a link I can share_ and submit the ticket. Once sent, the ticket will open automatically, providing instant access.

Each public ticket includes key details such as the current URL, operating system type and version, screen size, battery status,
user activity history including all interactions, network requests, and console logs.

<img
alt="Just a link I can share"
src={useBaseUrl('img/chrome-extension/submitting_ticket_and_info.gif')}
/>

## Send tickets into the Dashboard

For teams using Shake, the Chrome extension allows direct submission of tickets to apps configured within the Shake Dashboard.

This eliminates the need to integrate the Shake SDK into your app and allows you to better organize and manage your tickets.
You just simply install the extension, log in into the dashboard in your browser and send tickets directly to the dashboard.

The Shake extension will only display web apps that have either no permitted URL set or a properly configured permitted URL.

<img
alt="Permitted url"
src={useBaseUrl('img/chrome-extension/permitted_url.gif')}
/>

## Collect feedback from anonymous users

Another useful feature is the ability to collect feedback from anonymous users.

By setting the permitted URL in your app settings and verifying your domain name, any visitor with the Shake extension installed can submit tickets to your app.

Encouraging users to install the extension makes it easier to collect reports from anonymous visitors, helping you gather valuable feedback.

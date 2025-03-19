---
id: extension
title: Chrome Extension
---
import useBaseUrl from '@docusaurus/useBaseUrl';

> Learn how to use Shake with the Chrome extension.

<p class="p2 mt-40">You're viewing the Web docs. Other platforms → &nbsp;
<a href="/docs/ios/install/spm/">iOS</a>&nbsp; 
<a href="/docs/android/installation/">Android</a>&nbsp;
<a href="/docs/react/install/manual-linking/">React Native</a>&nbsp;
<a href="/docs/flutter/installation/">Flutter</a>&nbsp;  
</p>

## Overview

The Shake Chrome Extension allows you to create and submit tickets effortlessly from your browser. With just a click, you can capture issues, send reports, and share feedback without needing a Shake account or integrating any code into your app.

The extension works seamlessly with Chromium-based browsers such as Chrome, Brave, Vivaldi, Edge, and others.

:::note

The Shake Chrome Extension has a limited feature set compared to the Shake Web SDK.
If you need advanced functionalities such as user registration, in-app chat, or access to previously reported tickets, you should consider integrating the Shake Web SDK instead.

:::note

## Installation

The Shake Chrome Extension is available on the Chrome Web Store:

[Install Shake Chrome extension](https://chromewebstore.google.com/detail/shake/fgpnklngaiahpcpjennhbcmkiahjohdk)

Once installed, a Shake button will appear in your browser toolbar, allowing easy access to ticket creation.

There are a few ways you can utilize Shake extension:

## Create a ticket and share a link

With the Shake Chrome Extension, you can easily create a public ticket to share with others or keep for personal reference.

Simply select the option _Just a link I can share_ and submit the ticket. Once sent, the ticket will open automatically, providing instant access.

Each public ticket includes key details such as the current URL, operating system type and version, screen size, battery status,
user activity history including all interactions, network requests, and console logs.

## Send tickets into the Dashboard

For teams using Shake, the Chrome extension allows direct submission of tickets to apps configured within the Shake Dashboard.

This eliminates the need to integrate the Shake SDK into your app and allows you to better organize and manage your tickets.
You just simply install the extension, log in into the dashboard in your browser and send tickets directly to the dashboard. 

The Shake extension will only display web apps that have either no permitted URL set or a properly configured permitted URL.

## Collect feedback from anonymous users

Another useful feature is the ability to collect feedback from anonymous users.

By setting the permitted URL in your app settings and verifying your domain name, any visitor with the Shake extension installed can submit tickets to your app.

Encouraging users to install the extension makes it easier to collect reports from anonymous visitors, helping you gather valuable feedback.


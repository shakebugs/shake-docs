---
id: home-screen
title: Home screen
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> The Home screen is a central part of the Shake UI.

<p class="p2 mt-40">You're viewing the iOS docs. Other platforms → &nbsp;
<a href="/docs/android/shake-ui/home-screen/">Android</a>&nbsp;
<a href="/docs/react/shake-ui/home-screen/">React Native</a>&nbsp; 
<a href="/docs/flutter/shake-ui/home-screen/">Flutter</a>&nbsp;  
<a href="/docs/web/shake-ui/#home-screen">Web</a>&nbsp;
</p>


## Introduction

Here, your user can see:

- A welcome message that you can change from [Shake SDK](/ios/configuration-and-data/home-screen#changing-the-home-screen-subtitle).
- A button to submit a new ticket. This section can be [customized](/ios/configuration-and-data/home-screen#setting-up-custom-actions).
- All their previous tickets (user feedback and crash reports).
  To show them their previous tickets, [register your users](/ios/users/overview) with Shake.

<table class="media-container mt-50">
<img
  alt="Shake Home screen"
  width="376"
  src={useBaseUrl('screens/android-home-screen@2x.png')}
/>
</table>

## Show

To show the Home screen to an app user, call the `Shake.show` method with the `SHKShowOptionHome` argument.
Visit [Invocations](/ios/user-feedback/invoke#invoke-through-code) to learn more.

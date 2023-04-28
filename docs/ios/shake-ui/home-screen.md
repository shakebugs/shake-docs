---
id: home-screen
title: Home screen
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> The Home screen is a central part of the Shake UI.

## Introduction

Here, your user can see:

- A welcome message that you can change from your [Shake dashboard](https://app.shakebugs.com/administration/white-labeling).
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

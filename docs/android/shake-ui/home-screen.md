---
id: home-screen
title: Home screen
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Home screen is a central part of the Shake UI.

## Introduction

Here, your user can see:
* A button to submit a new ticket.
* All their previous tickets (user feedback and crash reports).
To show them their previous tickets, [register your users](android/users/overview.md) with Shake.

<table class="media-container mt-50">
<img
  alt="Shake Home screen"
  width="376"
  src={useBaseUrl('screens/android-home-screen@2x.png')}
/>
</table>

## Show

To show the Home screen to an app user, call the `Shake.show` method with the `ShakeScreen.HOME` argument.
Visit [manual invocations](android/user-feedback/invoke.md/#invoke-through-code) to learn more.
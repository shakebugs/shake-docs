---
id: home-screen
title: Home screen
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>Home screen is a central part of the Shake user interface.

## Introduction

It's designed to interoperate with Shake's [Users](android/users/introduction.md) module.
If you register your users with Shake, their tickets (user feedback and crash reports) will be listed here.

<img
  alt="Home screen"
  src={useBaseUrl('screens/home_screen.png')}
/>

## Show

To show Home screen to your user, call the `Shake.show` method with the `ShakeScreen` argument.
Visit [Invocations](android/customer-feedback/invoke.md/#invoke-through-code) to read more about manual invocations.

---
id: home-screen
title: Home screen
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

*Home screen* is the central part of the Shake user interface.

## Introduction

Home screen acts as a feedback center designed to elegantly interoperate with the Shake [Users](flutter/users/introduction.md) feature.
If you registered your *User* with Shake, all of their tickets will be listed here.

Tickets visible in the table represent the uploaded tickets that are synced with the *Shake dashboard*.
*Pending uploads* will be displayed as the greyed out version of the regular, uploaded ticket.

The top portion of the screen consists of introductory message and the *Submit new ticket* action.

<img
  alt="Home screen"
  src={useBaseUrl('screens/home_screen.png')}
/>

## Show

To show the *Home screen* to a user, call the `Shake.show` method with the `ShakeScreen` argument.

More on the manual invocations can be read in the [Invocations](flutter/customer-feedback/invoke.md/#invoke-through-code) page.

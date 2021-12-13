---
id: introduction
title: Overview
---

import useBaseUrl from '@docusaurus/useBaseUrl';

>This module allows your users and testers to seamlessly report their feedback to you.

## Introduction

When this module is enabled, you have various options how, when and where to invoke Shake in your app.
Here are just two examples, explore the docs and customize Shake's User feedback module to your needs:

<table class="media-container">
<img
  alt="Open Shake New ticket screen"
  width="520"
  src={useBaseUrl('screens/open-shake-new-ticket-screen@2x.png')}
/>
</table>
<p class="p2 center-align">Common internal setup</p>

<table class="media-container">
<img
  alt="Open Shake Home screen"
  width="520"
  src={useBaseUrl('screens/open-shake-home-screen@2x.png')}
/>
</table>
<p class="p2 center-align">Common production setup</p>



## Shared configuration

Just like the Crash reports module, User feedback module pulls your
[Configuration & Data](/android/configuration-and-data/introduction.md).

This means that all user feedback comes to you with [auto screenshot](/android/configuration-and-data/screenshot.md)
and [auto screen recording](/android/configuration-and-data/automatic-screen-recording.md)
of what happened before the ticket was submitted, [activity history](/android/configuration-and-data/activity.md) and other useful data.

Everything works offline too.
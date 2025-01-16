---
id: overview
title: Overview
---

import useBaseUrl from '@docusaurus/useBaseUrl';

>The User feedback module allows your users and testers to seamlessly report their feedback to you.

<p class="p2 mt-40">You're viewing the Android docs. Other platforms →&nbsp;
<a href="/docs/ios/user-feedback/overview/">iOS</a>&nbsp;
<a href="/docs/react/user-feedback/overview/">React Native</a>&nbsp;
<a href="/docs/flutter/user-feedback/overview/">Flutter</a>&nbsp;
<a href="/docs/web/user-feedback/overview/">Web</a>&nbsp;
</p>

## Introduction

When this module is enabled, you have various options for how, when and where to invoke Shake in your app.
Explore the docs and customize Shake's User feedback module to your needs.
To get you started, here are just two examples:

<table class="media-container mt-50">
<img
  alt="Open Shake New ticket screen"
  width="520"
  src={useBaseUrl('screens/open-shake-new-ticket-screen@2x.png')}
/>
</table>
<p class="p2 center-align">Common internal testing setup: Make Shake's <a href="/android/shake-ui/new-ticket-screen/">New ticket screen</a> available from anywhere</p>

<table class="media-container mt-50">
<img
  alt="Open Shake Home screen"
  width="520"
  src={useBaseUrl('screens/open-shake-home-screen@2x.png')}
/>
</table>
<p class="p2 center-align">Common production setup: A button on your Help screen that opens Shake's <a href="/android/shake-ui/home-screen/">Home screen</a></p>



## Shared configuration

Just like the [Crash reports](android/crash-reports/overview.md) module, the User feedback module pulls your
[Configuration and data](/android/configuration-and-data/overview.md) settings.

This means that all user feedback comes to you with an [auto screenshot](/android/configuration-and-data/auto-screenshot.md),
an [auto screen recording](/android/configuration-and-data/auto-screen-recording.md)
of what happened before the ticket was submitted, [activity history](/android/configuration-and-data/activity-history.md) and other useful data.

<p class="p2 mt-80 mb-10">⚡️ Shake is improved every week.
Stumbled upon a <a href="https://feedback.shakebugs.com/bugs">bug</a>?
Want a <a href="https://feedback.shakebugs.com/feature-requests">new feature</a> to be added?
Create new tickets and upvote existing ones on the Public feedback board.</p>
<p></p>

---
id: new-ticket-screen
title: New ticket screen
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>Your users submit tickets from this screen.

<p class="p2 mt-40">You're viewing the Android docs. Other platforms →&nbsp;
<a href="/docs/ios/shake-ui/new-ticket-screen/">iOS</a>&nbsp;
<a href="/docs/react/shake-ui/new-ticket-screen/">React Native</a>&nbsp;
<a href="/docs/flutter/shake-ui/new-ticket-screen/">Flutter</a>&nbsp;
<a href="/docs/web/shake-ui/#screens">Web</a>&nbsp;
</p>

## Introduction

The New ticket screen contains various elements, which can be tweaked according to your needs.
Visit [Elements of the New ticket screen](/android/configuration-and-data/overview/#elements-of-the-new-ticket-screen) for more details.

<table class="media-container mt-50">
<img
  alt="New ticket screen"
  width="370"
  src={useBaseUrl('screens/android-new-ticket-screen@2x.png')}
/>
</table>

## How to show this screen

This screen is shown when your users invoke Shake manually.
To show this screen programmatically, call `Shake.show` with no arguments since it's the default option.
Visit [Invocations](android/user-feedback/invoke.md) to read about various ways to invoke Shake.

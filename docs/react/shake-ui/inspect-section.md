---
id: inspect-section
title: Inspect section
---
import useBaseUrl from '@docusaurus/useBaseUrl';

> Before submitting a ticket, your users can freely inspect [Data attached by default](react/configuration-and-data/data-attached-by-default.md),
[Ticket metadata](react/configuration-and-data/ticket-metadata.md) and [User metadata](react/users/update-user-metadata.md).

<p class="p2 mt-40">You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/shake-ui/inspect-section/">iOS</a>&nbsp; 
<a href="/docs/android/shake-ui/inspect-section/">Android</a>&nbsp;
<a href="/docs/flutter/shake-ui/inspect-section/">Flutter</a>&nbsp;  
</p>


## Introduction

They access the Inspect section by tapping the *Inspect* button on the [New ticket screen](react/shake-ui/new-ticket-screen.md).


## Screens

The Inspect section consists of five screens. Here's how they're related:

<table class="media-container mt-40 mb-40">
<img
  alt="Shake screens structure"
  width="520"
  src={useBaseUrl('screens/inspect-section-ios-android-structure.svg')}
/>
</table>

and here's how they look like:

<table class="media-container mt-40">
<img
  className="screen-image"
  alt="Inspect section"
  width="586"
  src={useBaseUrl('screens/inspect-section-ui@2x.png')}
/>
</table>


## Hide the Inspect button

The *Inspect* button is an optional element and [can be disabled](/react/configuration-and-data/custom-forms#inspect-button).

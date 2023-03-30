---
id: inspect-section
title: Inspect section
---
import useBaseUrl from '@docusaurus/useBaseUrl';

> Before submitting a ticket, your users can freely inspect [Data attached by default](/ios/configuration-and-data/data-attached-by-default.md), 
[Ticket metadata](/ios/configuration-and-data/ticket-metadata.md) and [User metadata](/ios/users/update-user-metadata.md). 
In case of a [Crash report](/ios/crash-reports/ask-for-description/#enable), they can also inspect its stack trace.

## Introduction

They access the Inspect section by tapping the *Inspect* button on the [New ticket screen](/ios/shake-ui/new-ticket-screen.md).

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

The *Inspect* button is an optional element and [can be disabled](/ios/configuration-and-data/custom-forms#inspect-button).

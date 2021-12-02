---
id: new-ticket-screen
title: New ticket screen
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>Your users submit tickets from this screen.

## Introduction

It contains various components, many of which can be tweaked according to your needs.
Visit [Configuration and data](android/configuration-and-data/introduction.md#elements-of-the-new-ticket-screen) for more details.

<table class="media-container mt-50">
<img
  className="screen-image"
  alt="New ticket screen"
  src={useBaseUrl('screens/new_screen.png')}
/>
</table>

## Show

This screen is shown when your users invoke Shake manually.
To show this screen programmatically, call `Shake.show` with no arguments since it's the default option.
Visit [Invocations](android/customer-feedback/invoke.md) to read about various ways to invoke Shake.
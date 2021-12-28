---
id: new-ticket-screen
title: New ticket screen
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>Your users submit tickets from this screen.

## Introduction

It contains various elements, many of which can be tweaked according to your needs.
Visit [New ticket screen elements](android/configuration-and-data/new-ticket-screen-elements) for more details.

<table class="media-container mt-50">
<img
  alt="New ticket screen"
  width="370"
  src={useBaseUrl('screens/android-new-ticket-screen@2x.png')}
/>
</table>

## Show

This screen is shown when your users invoke Shake manually.
To show this screen programmatically, call `Shake.show` with no arguments since it's the default option.
Visit [Invocations](android/user-feedback/invoke.md) to read about various ways to invoke Shake.
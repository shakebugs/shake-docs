---
id: new-ticket-screen
title: New ticket screen
---
import useBaseUrl from '@docusaurus/useBaseUrl';

*New ticket* screen is used to configure and submit tickets to Shake.

## Introduction

The layout of the screen is separated into individual components used to enrich the current report.

Some of the components, like [Inspect](ios/inspect.md) and [Feedback type](ios/feedback-type.md) can be turned off via the Shake configuration, and some
are disabled depending on the report context.

<img
  alt="New ticket screen"
  src={useBaseUrl('screens/new_screen.png')}
/>

## Display

This screen is automatically presented upon any kind of user invocation of Shake.

To trigger the display of this screen programatically, call `Shake.show` with no arguments, as it is the default option.

More on the manual invocations can be read in the [Invocations](ios/invoke.md/#invoke-through-code) page.

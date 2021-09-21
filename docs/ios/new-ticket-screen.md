---
id: new-ticket-screen
title: New ticket screen
---
import useBaseUrl from '@docusaurus/useBaseUrl';

*New ticket* screen is used to submit a ticket to Shake.

## Introduction

The screen comprises of various components used to fill in the ticket details.

Some of the components, like [Inspect](ios/inspect.md) and [Feedback type](ios/feedback-type.md) can be turned off via the Shake configuration, and some
are disabled depending on the report context.

<img
  alt="New ticket screen"
  src={useBaseUrl('screens/new_screen.png')}
/>

## Show

This screen is shown upon manual user invocation of Shake.

To show this screen programmatically, call `Shake.show` with no arguments, as it is the default option.

Read more about manual invocations on the [Invocations](ios/invoke.md/#invoke-through-code) page.
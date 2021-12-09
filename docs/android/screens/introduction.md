---
id: introduction
title: Overview
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Shake's user interface explained, and how you can customize it.


## Screens

Shake has 5 screens:
* Home
* Chat
* New ticket
* Drawing
* Inspect

Here's how those screens are related:

IMAGE

## Accessing Shake

You can open either Shake's Home screeen or New ticket screen, depending on the flow you want to achieve for your users.
Three most common use cases where to add Shake to your app are listed below.
Of course, it's entirely up to you how you want to use Shake.

### Production ticketing system

In production, apps usually add Shake under
My account screen → Help screen → "Submit feedback" button → Home screen

Here, your users can see their previously submitted tickets, chat with you and send new tickets.

### Internal feedback collection

This entry point is most commonly used during internal testing, when testers or office colleagues are instructed to invoke Shake instantly when they notice a bug, or have a suggestion what to improve.

Any screen → "shaking gesture" → New ticket screen

### Crash reporting

Lastly, Shake can open up automatically after your app crashes.

Any screen → your app crashes → Ask for description sheet → New ticket screen


## Design and customizations

Shake supports dark and light mode out of the box, there is no need to code anything.
Its UI will automatically adapt depending on your app design settings.

Shake also supports white labeling.
You can change its main action color and its welcome message without coding, from your [Shake Dashboard](https://app.shakebugs.com/settings/workspace#whitelabel).
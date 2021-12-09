---
id: introduction
title: Overview
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Shake's user interface explained, and how you can customize it.


## Screens

Shake has these screens:
* Home
* Chat
* New ticket
* Drawing
* Inspect

Here's how those screens are related:

IMAGE

## Opening Shake

You can decide to open either Shake's Home screeen or New ticket screen, depending on the flow you want to achieve for your users.
Common use cases where to add Shake to your app are listed below.
Of course, it's entirely up to you to decide what suits your app UX.

### Production ticketing system

In production, apps usually add Shake under **My account or Setting screen → Help screen**.
There, they have a **Submit feedback** button and it opens up Shake's [Home screen](android/screens/home-screen.md):

IMAGE

### Internal feedback collection

This entry point is most commonly used during internal testing. Your testers or office colleagues are told to invoke Shake whenever they notice a bug or have a suggestion.
In this case, instruct Shake to open up the [New ticket screen](android/screens/new-ticket-screen.md):

IMAGE

### Crash reporting

Lastly, Shake can open up automatically after your app crashes.
[Enable Crash reports](android/crash-reports/enabling.md) and [enable the Ask for crash description sheet](android/crash-reports/describe-crash.md)
so your users can describe what happened before the crash:

IMAGE


## Design and customizations

Shake supports dark and light mode out of the box, there is no need to code anything.
Its UI will automatically adapt depending on your app design settings.

Shake also supports white labeling.
You can change its main action color and its welcome message without coding, from your [Shake Dashboard](https://app.shakebugs.com/settings/workspace#whitelabel).
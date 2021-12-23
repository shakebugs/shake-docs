---
id: overview
title: Overview
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>This module tracks crashes and uncaught exceptions in your app. They are then intelligently grouped on your Shake Dashboard,
offering heaps of contextual data to help you fix them fast.

## Introduction

When this module is enabled and your user opens up your app after the crash, you have two options:
* Send yourself the crash report instantly and silently.
* Offer them to [add a description to that crash report](/android/crash-reports/ask-for-description.md).

<table class="media-container">
<img
  alt="Crash report options"
  width="520"
  src={useBaseUrl('screens/crash-report-options@2x.png')}
/>
</table>

## Shared configuration

Just like the [User feedback](android/user-feedback/overview.md) module, Crash reports module pulls your
[Configuration and data](/android/configuration-and-data/overview.md).

This means that crash reports also come to you with [auto screenshot](/android/configuration-and-data/auto-screenshot.md)
and [auto screen recording](/android/configuration-and-data/auto-screen-recording.md)
of what happened before the crash, [Activity history](/android/configuration-and-data/activity-history.md) and other useful data.
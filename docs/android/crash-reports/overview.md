---
id: overview
title: Overview
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>The Crash reports module tracks crashes and uncaught exceptions in your app. They are then intelligently grouped on your Shake dashboard,
offering loads of contextual data to help you fix them fast.

<p class="p2 mt-40">You're viewing the Android docs. Other platform →&nbsp;
<a href="/docs/ios/crash-reports/overview/">iOS</a>&nbsp;
</p>

## Introduction

When this module is [enabled](/android/crash-reports/enable) and your user opens your app after the crash, you have two options:
* Send yourself the crash report instantly and silently.
* [Ask them for an additional description](/android/crash-reports/ask-for-description).

<table class="media-container">
<img
  alt="Crash report options"
  width="520"
  src={useBaseUrl('screens/crash-report-options@2x.png')}
/>
</table>

## Shared configuration

Just like the [User feedback](android/user-feedback/overview.md) module, the Crash reports module pulls your
[Configuration and data](/android/configuration-and-data/overview.md) settings.

This means that crash reports also come to you with an [auto screenshot](/android/configuration-and-data/auto-screenshot.md),
an [auto screen recording](/android/configuration-and-data/auto-screen-recording.md)
of what happened before the crash, an [activity history](/android/configuration-and-data/activity-history.md) and other useful data.

<p class="p2 mt-80 mb-10">⚡️ Shake is improved every week.
Stumbled upon a <a href="https://feedback.shakebugs.com/bugs">bug</a>?
Want a <a href="https://feedback.shakebugs.com/feature-requests">new feature</a> to be added?
Create new tickets and upvote existing ones on the Public feedback board.</p>
<p></p>

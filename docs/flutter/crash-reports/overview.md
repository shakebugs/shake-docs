---
id: overview
title: Overview
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>The Crashes module tracks crashes and uncaught errors in your app. They are then intelligently grouped on your Shake dashboard,
offering loads of contextual data to help you fix them fast.

<p class="p2 mt-40">
You're viewing the Flutter docs. Other platforms → &nbsp;
<a href="/docs/ios/crash-reports/overview">iOS</a>&nbsp;
<a href="/docs/android/crash-reports/overview">Android</a>&nbsp;
<a href="/docs/react/crash-reports/overview">React Native</a>&nbsp;
</p>

## Introduction

Flutter apps can fail in two places, and Shake tracks both:

* **Dart code.** An uncaught error in your Dart code doesn't close your app, so Shake reports it right away.
* **Native code.** A crash in the Android or iOS part of your app closes it. Shake reports it when your user opens the app again.

When this module is [enabled](/flutter/crash-reports/enable), you have two options for every uncaught error:
* Send yourself the crash report instantly and silently.
* [Ask your user for an additional description](/flutter/crash-reports/ask-for-description).

<table class="media-container">
<img
  alt="Crash report options"
  width="520"
  src={useBaseUrl('screens/crash-report-options@2x.png')}
/>
</table>

## What Shake reports

Shake reports uncaught errors in your Dart code and crashes in the native code of your app.
Errors in isolates you start yourself aren't reported automatically,
see [how to report them](/flutter/crash-reports/handling-error#errors-in-isolates).

## Shared configuration

Just like the [Feedback](/flutter/user-feedback/overview.md) module, the Crashes module pulls your
[Configuration and data](/flutter/configuration-and-data/overview.md) settings.

This means that crash reports also come to you with an [auto screenshot](/flutter/configuration-and-data/auto-screenshot.md),
an [auto screen recording](/flutter/configuration-and-data/auto-screen-recording.md)
of what happened before the crash, an [activity history](/flutter/configuration-and-data/activity-history.md) and other useful data.

<p class="p2 mt-80 mb-10">⚡️ Shake is improved every week.
Stumbled upon a <a href="https://feedback.shakebugs.com/bugs">bug</a>?
Want a <a href="https://feedback.shakebugs.com/feature-requests">new feature</a> to be added?
Create new tickets and upvote existing ones on the Public feedback board.</p>
<p></p>

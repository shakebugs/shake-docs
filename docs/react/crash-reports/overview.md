---
id: overview
title: Overview
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>The Crashes module tracks crashes and uncaught errors in your app. They are then intelligently grouped on your Shake dashboard,
offering loads of contextual data to help you fix them fast.

<p class="p2 mt-40">
You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/crash-reports/overview">iOS</a>&nbsp;
<a href="/docs/android/crash-reports/overview">Android</a>&nbsp;
<a href="/docs/flutter/crash-reports/overview">Flutter</a>&nbsp;
</p>

## Introduction

React Native apps can fail in two places, and Shake tracks both:

* **JavaScript code.** An uncaught JavaScript error closes a release build, and Shake reports it when your user opens the app again. A development build keeps running and shows the error screen, and Shake reports the error right away.
* **Native code.** A crash in the Android or iOS part of your app closes it. Shake reports it when your user opens the app again.

When this module is [enabled](/react/crash-reports/enable), you have two options for every crash:
* Send yourself the crash report instantly and silently.
* [Ask them for an additional description](/react/crash-reports/ask-for-description).

<table class="media-container">
<img
  alt="Crash report options"
  width="520"
  src={useBaseUrl('screens/crash-report-options@2x.png')}
/>
</table>

## What Shake reports

Shake reports uncaught errors in your JavaScript code and crashes in the native code of your app.
Unhandled promise rejections aren't reported automatically,
see [how to report them](/react/crash-reports/handling-error#promise-rejections).

## Shared configuration

Just like the [Feedback](/react/user-feedback/overview.md) module, the Crashes module pulls your
[Configuration and data](/react/configuration-and-data/overview.md) settings.

This means that crash reports also come to you with an [auto screenshot](/react/configuration-and-data/auto-screenshot.md),
an [auto screen recording](/react/configuration-and-data/auto-screen-recording.md)
of what happened before the crash, an [activity history](/react/configuration-and-data/activity-history.md) and other useful data.

<p class="p2 mt-80 mb-10">⚡️ Shake is improved every week.
Stumbled upon a <a href="https://feedback.shakebugs.com/bugs">bug</a>?
Want a <a href="https://feedback.shakebugs.com/feature-requests">new feature</a> to be added?
Create new tickets and upvote existing ones on the Public feedback board.</p>
<p></p>

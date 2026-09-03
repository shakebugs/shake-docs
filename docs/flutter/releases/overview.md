---
id: overview
title: Overview
---

>Shake automatically tracks app sessions to give you visibility into how each release of your app is performing, right from your Shake dashboard.

<p class="p2 mt-40">
You're viewing the Flutter docs. Other platforms → &nbsp;
<a href="/docs/ios/releases/overview/">iOS</a>&nbsp;
<a href="/docs/android/releases/overview/">Android</a>&nbsp;
<a href="/docs/react/releases/overview/">React Native</a>&nbsp;
<a href="/docs/web/releases/overview/">Web</a>&nbsp;
</p>

## Introduction

As soon as the SDK initializes, Shake starts tracking sessions in the background — no setup required. A session represents a continuous period of app use, and each one carries a snapshot of the device it ran on, plus a summary of the network requests made during it.

## What gets collected

Every session automatically collects:

* **[Session data](/flutter/releases/session-data)** — a snapshot of the device (model, OS version, locale, timezone, orientation, screen size, network type) and how long the session lasted.
* **[Network requests](/flutter/releases/network-requests)** — a summary of the HTTP calls made during the session (URL, method, status code, average duration), once you've set up network request tracking.

## Enabled by default

Session tracking requires no configuration — it starts the moment `Shake.start()` is called, with no extra flag or method call needed.

A session ends after 5 minutes of inactivity (the app being backgrounded); returning to the app sooner continues the same session. Sessions shorter than 5 seconds are discarded, so quick launches or accidental app switches don't skew your data — unless the session ended in a crash, which is always reported no matter how short it was.

## Offline support

Session data is always stored locally first, so nothing is lost if the device is offline. Once online, pending sessions and their network request data sync to Shake in a single batch, at most every 30 minutes.

---
id: overview
title: Overview
---

>Shake automatically tracks app sessions to give you visibility into how each release of your app is performing, right from your Shake dashboard.

<p class="p2 mt-40">
You're viewing the Web docs. Other platforms → &nbsp;
<a href="/docs/ios/releases/overview">iOS</a>&nbsp;
<a href="/docs/android/releases/overview">Android</a>&nbsp;
<a href="/docs/react/releases/overview">React Native</a>&nbsp;
<a href="/docs/flutter/releases/overview">Flutter</a>&nbsp;
</p>

## Introduction

As soon as the SDK initializes, Shake starts tracking sessions in the background — no setup required. A session represents a continuous period of time your app is open in a browser tab, and each one carries a snapshot of the device it ran on, plus a summary of the network requests made during it.

## What gets collected

Every session automatically collects:

* **[Session data](/web/releases/session-data)** — a snapshot of the device (browser, OS, locale, timezone, orientation, screen size, network type) and how long the session lasted.
* **[Network requests](/web/releases/network-requests)** — a summary of the HTTP calls made during the session (URL, method, status code, average duration).

## Enabled by default

Session tracking requires no configuration — it starts the moment `Shake.start()` is called, with no extra flag or method call needed.

A session ends when the tab is hidden for more than 5 minutes; switching back sooner continues the same session. Sessions shorter than 5 seconds are discarded, so quick tab switches don't skew your data — unless the session ended in a crash, which is always reported no matter how short it was.

## Offline support

Session data is always stored locally first, so nothing is lost if the browser is offline. Once online, pending sessions and their network request data sync to Shake in a single batch, at most every 30 minutes.

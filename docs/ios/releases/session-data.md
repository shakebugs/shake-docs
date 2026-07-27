---
id: session-data
title: Session data
---

>Each session carries a lightweight snapshot of the device it ran on.

<p class="p2 mt-40">
You're viewing the iOS docs. Other platforms → &nbsp;
<a href="/docs/android/releases/session-data/">Android</a>&nbsp;
<a href="/docs/react/releases/session-data/">React Native</a>&nbsp;
<a href="/docs/flutter/releases/session-data/">Flutter</a>&nbsp;
<a href="/docs/web/releases/session-data/">Web</a>&nbsp;
</p>

## What's included

Every session sent to Shake includes:

* Device model
* OS version
* Locale
* Timezone
* App version
* Device orientation
* Screen width and height
* Network type
* Auth state (whether the device has a lock screen secured)

If you've set any custom key-value data with [`Shake.setMetadata`](/ios/configuration-and-data/ticket-metadata.md), it's included as well.

:::note
This is a lighter snapshot than the one attached to bug reports — it doesn't include battery, memory, disk space, or permissions. Those are only collected when a user actually submits a ticket.
:::

## Crash detection

If your app crashes, Shake records that the session ended in a crash. This happens automatically and runs independently of [`Shake.configuration.isCrashReportingEnabled`](/ios/crash-reports/enable) — it's used purely to mark the session's end reason, not to generate a crash report.

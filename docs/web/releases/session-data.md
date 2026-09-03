---
id: session-data
title: Session data
---

>Each session carries a lightweight snapshot of the device it ran on.

<p class="p2 mt-40">
You're viewing the Web docs. Other platforms → &nbsp;
<a href="/docs/ios/releases/session-data/">iOS</a>&nbsp;
<a href="/docs/android/releases/session-data/">Android</a>&nbsp;
<a href="/docs/react/releases/session-data/">React Native</a>&nbsp;
<a href="/docs/flutter/releases/session-data/">Flutter</a>&nbsp;
</p>

## What's included

Every session sent to Shake includes:

* Device type
* Browser name and version
* OS name and version
* Locale
* Timezone
* App version
* Device orientation
* Screen width and height
* Network type

Since web apps don't have a built-in versioning system, App version comes from the optional second argument to [`Shake.start()`](/web/install/npm#initialize-shake) — it defaults to `"1.0.0"` if you don't pass one.

If you've set any custom key-value data with [`Shake.setMetadata`](/web/configuration-and-data/ticket-metadata.md), it's included as well.

:::note
This is a lighter snapshot than the one attached to bug reports — some device details are only collected when a user actually submits a ticket.
:::

## Crash detection

If your app crashes, or an unhandled JavaScript error occurs, Shake records that the session ended in a crash. This happens automatically — it's used purely to mark the session's end reason, not to generate a crash report.

Because crashes tend to happen moments after launch, a session that ended in a crash is reported even when it was shorter than the 5-second minimum that normally applies.

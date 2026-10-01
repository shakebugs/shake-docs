---
id: network-requests
title: Network requests
---

>Network request tracking works automatically — there's nothing extra to set up.

<p class="p2 mt-40">
You're viewing the Web docs. Other platforms → &nbsp;
<a href="/docs/ios/releases/network-requests">iOS</a>&nbsp;
<a href="/docs/android/releases/network-requests">Android</a>&nbsp;
<a href="/docs/react/releases/network-requests">React Native</a>&nbsp;
<a href="/docs/flutter/releases/network-requests">Flutter</a>&nbsp;
</p>

## Why it matters

This data is what lets you see, per release, which endpoints are slowest and which have the highest error rates on your Shake dashboard — so you can catch performance and reliability regressions before they reach more users.

## Setup

Once `Shake.start()` runs, Shake automatically tracks requests made via `fetch` and `XMLHttpRequest`. This same data feeds both [Activity history](/web/configuration-and-data/activity-history.md) and your session network data — there's no separate step to enable one or the other.

If you'd like to turn this off, set `Shake.report.isNetworkRequestsEnabled` to `false` — see [Activity history](/web/configuration-and-data/activity-history.md) for details.

## What's tracked

For each request, Shake tracks the URL (query parameters and fragment stripped), method, status code, average duration, and call count.

* Requests to the same URL and method but with different status codes (for example, `200` vs. `500`) are tracked as separate entries.
* Path parameters aren't normalized — `/users/123` and `/users/456` are tracked as distinct endpoints.

Request and response bodies and headers are never included in this data — those are only collected for [Activity history](/web/configuration-and-data/activity-history.md) on bug reports.

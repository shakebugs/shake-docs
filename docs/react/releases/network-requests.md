---
id: network-requests
title: Network requests
---

>Unlike session data, network request tracking requires you to forward requests to Shake first.

<p class="p2 mt-40">
You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/releases/network-requests">iOS</a>&nbsp;
<a href="/docs/android/releases/network-requests">Android</a>&nbsp;
<a href="/docs/flutter/releases/network-requests">Flutter</a>&nbsp;
<a href="/docs/web/releases/network-requests">Web</a>&nbsp;
</p>

## Why it matters

This data is what lets you see, per release, which endpoints are slowest and which have the highest error rates on your Shake dashboard — so you can catch performance and reliability regressions before they reach more users.

## Setup

If you've already set up network tracking for [Activity history](/react/configuration-and-data/activity-history.md), no extra work is needed — session network tracking uses the same data.

Otherwise, enable automatic tracking:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
Shake.setNetworkRequestsEnabled(true);
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
Shake.setNetworkRequestsEnabled(true);
```

</TabItem>
</Tabs>

If you need to insert requests manually, use `Shake.insertNetworkRequest(networkRequestBuilder)` with a `NetworkRequestBuilder` instead.

## What's tracked

For each request, Shake tracks the URL (query parameters and fragment stripped), method, status code, average duration, and call count.

* Requests to the same URL and method but with different status codes (for example, `200` vs. `500`) are tracked as separate entries.
* Path parameters aren't normalized — `/users/123` and `/users/456` are tracked as distinct endpoints.

Request and response bodies and headers are never included in this data — those are only collected for [Activity history](/react/configuration-and-data/activity-history.md) on bug reports.

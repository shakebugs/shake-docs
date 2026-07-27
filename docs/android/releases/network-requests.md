---
id: network-requests
title: Network requests
---

>Unlike session data, network request tracking requires you to forward requests to Shake first.

<p class="p2 mt-40">
You're viewing the Android docs. Other platforms → &nbsp;
<a href="/docs/ios/releases/network-requests/">iOS</a>&nbsp;
<a href="/docs/react/releases/network-requests/">React Native</a>&nbsp;
<a href="/docs/flutter/releases/network-requests/">Flutter</a>&nbsp;
<a href="/docs/web/releases/network-requests/">Web</a>&nbsp;
</p>

## Why it matters

This data is what lets you see, per release, which endpoints are slowest and which have the highest error rates on your Shake dashboard — so you can catch performance and reliability regressions before they reach more users.

## Setup

If you've already set up network tracking for [Activity history](/android/configuration-and-data/activity-history.md), no extra work is needed — session network tracking uses the same interceptor.

Otherwise, add this line to your `OkHttpClient`:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="App.java"
OkHttpClient okHttpClient = new OkHttpClient()
    .newBuilder()
    // highlight-next-line
    .addInterceptor(new ShakeNetworkInterceptor())
    .build();
```

</TabItem><TabItem value="kotlin">

```kotlin title="App.kt"
val okHttpClient = OkHttpClient()
    .newBuilder()
    // highlight-next-line
    .addInterceptor(ShakeNetworkInterceptor())
    .build()
```

</TabItem></Tabs>

If you don't use `OkHttpClient`, use [`Shake.handleNetworkRequest`](/android/configuration-and-data/activity-history.md) to forward requests to Shake instead.

## What's tracked

For each request, Shake tracks the URL (query parameters and fragment stripped), method, status code, average duration, and call count.

* Requests to the same URL and method but with different status codes (for example, `200` vs. `500`) are tracked as separate entries.
* Path parameters aren't normalized — `/users/123` and `/users/456` are tracked as distinct endpoints.

Request and response bodies and headers are never included in this data — those are only collected for [Activity history](/android/configuration-and-data/activity-history.md) on bug reports.

---
id: network-requests
title: Network requests
---

>Unlike session data, network request tracking requires you to forward requests to Shake first.

<p class="p2 mt-40">
You're viewing the Flutter docs. Other platforms → &nbsp;
<a href="/docs/ios/releases/network-requests">iOS</a>&nbsp;
<a href="/docs/android/releases/network-requests">Android</a>&nbsp;
<a href="/docs/react/releases/network-requests">React Native</a>&nbsp;
<a href="/docs/web/releases/network-requests">Web</a>&nbsp;
</p>

## Why it matters

This data is what lets you see, per release, which endpoints are slowest and which have the highest error rates on your Shake dashboard — so you can catch performance and reliability regressions before they reach more users.

## Setup

If you've already set up network tracking for [Activity history](/flutter/configuration-and-data/activity-history.md), no extra work is needed — session network tracking uses the same data.

Otherwise, forward requests to Shake using `ShakeHttpClient`:

```dart title="main.dart"
import 'package:shake_flutter/network/shake_http_client.dart';

void sendNetworkRequest() async {
    ShakeHttpClient shakeHttpClient = ShakeHttpClient();
    await shakeHttpClient.getUrl(Uri.parse("http://www.shakebugs.com"));
}
```

If you use `dio` or the `http` package, see [Activity history](/flutter/configuration-and-data/activity-history.md) for the dedicated `shake_dio_interceptor` and `shake_http_client` packages. For anything else, use `Shake.insertNetworkRequest(...)` to forward requests manually.

## What's tracked

For each request, Shake tracks the URL (query parameters and fragment stripped), method, status code, average duration, and call count.

* Requests to the same URL and method but with different status codes (for example, `200` vs. `500`) are tracked as separate entries.
* Path parameters aren't normalized — `/users/123` and `/users/456` are tracked as distinct endpoints.

Request and response bodies and headers are never included in this data — those are only collected for [Activity history](/flutter/configuration-and-data/activity-history.md) on bug reports.

---
id: activity
title: Activity history
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Shake diligently tracks user's interaction with your app, their network traffic and system events,
and automatically attaches all of those to every bug report.

## Introduction
You can inspect all events that lead to a bug being reported.
A link to Activity history is located in the top right corner:

<img
  alt="Activity screen"
  src={useBaseUrl('screens/activity_screen.png')}
/>

## Setting up

### User actions
User actions tracking is not supported for Shake Flutter SDK.

### Network requests
Shake provides you a wrapper for _dart.io HttpClient_ class which allows you to track network requests.
Additionally, if you are using _dio_ or _http_ packages for sending network requsts, you can use one our extensions.

#### dart.io
Use _ShakeHttpClient_ wrapper class to perform network requests.
All network requests sent with _ShakeHttpClient_ will be visible on the dashboard.

```dart title="lib/main.dart"
// highlight-next-line
import 'package:shake_flutter/network/shake_http_client.dart';

_sendNetworkRequest() async {
    // highlight-start
    ShakeHttpClient shakeHttpClient = ShakeHttpClient();
    await shakeHttpClient.getUrl(Uri.parse("http://www.shakebugs.com"));
    // highlight-end
}
```

#### dio
Install _shake_dio_interceptor_ extension for _dio_ package:

```yaml title="pubspec.yaml"
dependencies:
//highlight-next-line
    shake_dio_interceptor: ^10.0.0
```

Add _ShakeDioInterceptor_ to your _Dio_ instance:

```dart title="lib/main.dart"
// highlight-next-line
import 'package:shake_dio_interceptor/shake_dio_interceptor.dart';

_sendNetworkRequest() async {
    // highlight-start
    Dio dio = Dio();
    dio.interceptors.add(ShakeDioInterceptor());
    await dio.get("https://www.shakebugs.com");
    // highlight-end
}
```
All network requests sent with defined _Dio_ instance will be visible on the dashboard.

#### http
Install _shake_http_client_ extension for _http_ package:

```yaml title="pubspec.yaml"
dependencies:
//highlight-next-line
    shake_http_client: ^10.0.0
```

Use _ShakeHttpClient_ to send network requests:

```dart title="lib/main.dart"
// highlight-next-line
import 'package:shake_http_client/shake_http_client.dart';

_sendNetworkRequest() async {
    // highlight-start
    ShakeHttpClient shakeHttpClient = ShakeHttpClient();
    await shakeHttpClient.get("https://www.shakebugs.com");
    // highlight-end
}
```
All network requests sent with _ShakeHttpClient_ instance will be visible on the dashboard.

:::note
You should always match extension version with _shake_flutter_ version.
For example, if you are using _shake_flutter_ 10.0.0 version, 
you should also use _shake_dio_interceptor_ 10.0.0 version
:::

### System events
System events are tracked automatically and require no additional setup.

## Limitations
In a Free workspace, you can see up to 20 events that lead to every bug.
If you need to dive really deep to find causes of the weirdest bugs upgrade to Premium.
In a Premium workspace you can browse the entire activity history.

## Enabling and disabling
Activity history is enabled by default, however, you can use the method below to disable it:

```dart title="lib/main.dart"
// highlight-next-line
import 'package:shake_flutter/shake_flutter.dart';

_disableActivityHistory() {
    // highlight-next-line
    Shake.setEnableActivityHistory(false);
}
```
